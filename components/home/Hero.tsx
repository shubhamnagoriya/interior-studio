'use client';

import Button from '@/components/ui/Button';
import AnimatedText from '@/components/ui/AnimatedText';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 scale-105" id="hero-img-container">
        <div
          className="bg-cover bg-center w-full h-full transform transition-transform duration-[20s] ease-out hover:scale-110"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBy4et5UBRWmC0ObwbDbqJ3Oa-05TEJZelegc9uK59rXNnItmzoN2E37g94BvdgZ-JqsT1CIB4f0xzPIEdwyTpSkvvUdfTx18xUC9g01rtQE0zUEAYVU6x1-56KB0Kkb5zJybm3CDSao06-diAdgFyRXwIpYgLlkFXzbnTs8WwhvvuvW-Ogu4hkZonwTOMuZkQzuP8Qt5kdvLwx_LtqU13ZxzNggwAA9TsXOKaxk9kWk82goB4pU3KT')`,
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-margin-mobile w-full max-w-5xl mx-auto flex flex-col items-center mt-20">
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
            <Button href="/portfolio" variant="outline" className="border-on-primary text-on-primary hover:bg-on-primary hover:text-primary">
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
    </section>
  );
}
