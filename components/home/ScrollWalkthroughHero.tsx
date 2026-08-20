'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/ui/Button';
import AnimatedText from '@/components/ui/AnimatedText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const TOTAL_FRAMES = 300;
const INITIAL_PRELOAD_COUNT = 30;

function getFrameUrl(index: number): string {
  const frameNum = String(index + 1).padStart(4, '0');
  return `/walkthrough-camera-tour/frame-${frameNum}.webp`;
}

export default function ScrollWalkthroughHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const targetFrameRef = useRef<number>(0);
  const lastRenderedFrameRef = useRef<number>(-1);
  const needsResizeRef = useRef<boolean>(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Initialize images array once
  if (imagesRef.current.length === 0) {
    imagesRef.current = new Array(TOTAL_FRAMES).fill(null);
  }

  // Check reduced motion preference on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Helper to draw an image onto the canvas with cover scaling
  const drawCoverImage = (
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    canvasWidth: number,
    canvasHeight: number
  ) => {
    const imgWidth = img.naturalWidth || 1920;
    const imgHeight = img.naturalHeight || 1080;
    const imgAspect = imgWidth / imgHeight;
    const canvasAspect = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;

    if (canvasAspect > imgAspect) {
      drawHeight = canvasWidth / imgAspect;
    } else {
      drawWidth = canvasHeight * imgAspect;
    }

    const x = (canvasWidth - drawWidth) / 2;
    const y = (canvasHeight - drawHeight) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, x, y, drawWidth, drawHeight);
  };

  // Render a specific frame index (or nearest loaded fallback)
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Find requested or nearest loaded image
    let img = imagesRef.current[index];

    if (!img) {
      // Fallback search downwards
      for (let i = index - 1; i >= 0; i--) {
        if (imagesRef.current[i]) {
          img = imagesRef.current[i];
          break;
        }
      }
      // Fallback search upwards
      if (!img) {
        for (let i = index + 1; i < TOTAL_FRAMES; i++) {
          if (imagesRef.current[i]) {
            img = imagesRef.current[i];
            break;
          }
        }
      }
    }

    if (img && img.complete && img.naturalWidth > 0) {
      drawCoverImage(ctx, img, canvas.width, canvas.height);
    }
  }, []);

  // Image preloading logic
  useEffect(() => {
    let isCancelled = false;

    const loadImage = (index: number): Promise<HTMLImageElement | null> => {
      return new Promise((resolve) => {
        if (imagesRef.current[index]) {
          resolve(imagesRef.current[index]);
          return;
        }

        const img = new Image();
        img.src = getFrameUrl(index);
        img.onload = () => {
          if (isCancelled) return resolve(null);
          imagesRef.current[index] = img;
          // If this is the initial frame or target frame, trigger render
          if (index === 0 || index === targetFrameRef.current) {
            renderFrame(targetFrameRef.current);
          }
          resolve(img);
        };
        img.onerror = () => {
          resolve(null);
        };
      });
    };

    // 1. Immediately load frame 0
    loadImage(0).then(() => {
      if (isCancelled) return;
      // 2. Preload first chunk (frames 1 to INITIAL_PRELOAD_COUNT - 1)
      const initialPromises = [];
      for (let i = 1; i < INITIAL_PRELOAD_COUNT; i++) {
        initialPromises.push(loadImage(i));
      }

      Promise.all(initialPromises).then(() => {
        if (isCancelled) return;
        // 3. Progressively load remaining frames in small batches
        let nextIndex = INITIAL_PRELOAD_COUNT;
        const loadNextBatch = () => {
          if (isCancelled || nextIndex >= TOTAL_FRAMES) return;
          const batchPromises = [];
          const batchEnd = Math.min(nextIndex + 15, TOTAL_FRAMES);
          for (let i = nextIndex; i < batchEnd; i++) {
            batchPromises.push(loadImage(i));
          }
          nextIndex = batchEnd;
          Promise.all(batchPromises).then(() => {
            if (!isCancelled && nextIndex < TOTAL_FRAMES) {
              setTimeout(loadNextBatch, 15);
            }
          });
        };
        loadNextBatch();
      });
    });

    return () => {
      isCancelled = true;
    };
  }, [renderFrame]);

  // Handle Resize and Canvas DPR resolution
  useEffect(() => {
    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const width = Math.floor(rect.width * dpr);
      const height = Math.floor(rect.height * dpr);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        needsResizeRef.current = true;
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  // Animation frame loop & ScrollTrigger setup
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;

    const renderLoop = () => {
      if (
        targetFrameRef.current !== lastRenderedFrameRef.current ||
        needsResizeRef.current
      ) {
        renderFrame(targetFrameRef.current);
        lastRenderedFrameRef.current = targetFrameRef.current;
        needsResizeRef.current = false;
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    let ctx: gsap.Context | null = null;

    if (!isReducedMotion) {
      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.1,
          onUpdate: (self) => {
            const idx = Math.round(self.progress * (TOTAL_FRAMES - 1));
            targetFrameRef.current = Math.max(0, Math.min(TOTAL_FRAMES - 1, idx));
          },
        });
      }, container);

      ScrollTrigger.refresh();
    }

    return () => {
      if (ctx) ctx.revert();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isReducedMotion, renderFrame]);

  return (
    <section
      ref={containerRef}
      className={`walkthrough-section relative w-full ${
        isReducedMotion ? 'h-screen' : 'h-[350vh]'
      }`}
    >
      {/* Sticky Viewport */}
      <div className="walkthrough-sticky sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Fallback Image (shown while initial frame loads) */}
        <div className="absolute inset-0 z-0 scale-105" id="hero-img-container">
          <div
            className="bg-cover bg-center w-full h-full transform transition-transform duration-[20s] ease-out hover:scale-110"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBy4et5UBRWmC0ObwbDbqJ3Oa-05TEJZelegc9uK59rXNnItmzoN2E37g94BvdgZ-JqsT1CIB4f0xzPIEdwyTpSkvvUdfTx18xUC9g01rtQE0zUEAYVU6x1-56KB0Kkb5zJybm3CDSao06-diAdgFyRXwIpYgLlkFXzbnTs8WwhvvuvW-Ogu4hkZonwTOMuZkQzuP8Qt5kdvLwx_LtqU13ZxzNggwAA9TsXOKaxk9kWk82goB4pU3KT')`,
            }}
          />
        </div>

        {/* Canvas for Walkthrough Frame Sequence */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        {/* Subtle Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 z-[1] pointer-events-none" />

        {/* Hero Content Layer */}
        <div className="hero-content relative z-10 text-center px-margin-mobile w-full max-w-5xl mx-auto flex flex-col items-center mt-20">
          <AnimatedText delay={0}>
            <h1 className="font-display-xl text-display-lg-mobile md:text-display-xl text-on-primary mb-element-gap leading-tight">
              Spaces Designed to Be Lived In.
            </h1>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mb-12">
              Contemporary interiors shaped by architecture, materiality and timeless design.
            </p>
          </AnimatedText>

          <AnimatedText delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                href="/portfolio"
                variant="outline"
                className="border-on-primary text-on-primary hover:bg-on-primary hover:text-primary"
              >
                Explore Our Work
              </Button>
              <Button href="/about" variant="link" className="text-on-primary">
                Discover the Studio
              </Button>
            </div>
          </AnimatedText>
        </div>

        {/* Bottom Corner Tag */}
        <div className="absolute bottom-margin-mobile md:bottom-margin-page left-margin-mobile md:left-margin-page z-10">
          <AnimatedText delay={0.6}>
            <span className="font-label-caps text-label-caps text-on-primary tracking-[0.2em]">
              RESIDENCE 01 — MUMBAI
            </span>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}
