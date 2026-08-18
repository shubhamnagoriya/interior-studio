'use client';

import AnimatedText from '@/components/ui/AnimatedText';

export default function DesignApproach() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="bg-cover bg-center w-full h-full"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkYCh5jbixKIGLR_X2Z4ViXCp9ON93ijrfGbNV2JA36dx9htw-cRe9dbfNxZfhVcJw3a_zKZXgdFVpozYH9mytfH9ig6_2VC_OF3_ijOyeGQTYVNAsqgk-HOZKSZIX77T7rXNluJRpZ1XYpCe6D3_NqoiRpv8n0yspHjt9nIr_BpqyIrGwkgiqrV6gMk-1V_Wyt-WLtaXWKFlD1gf8zkg7Hm2dQTxGQWohAJQnKqlFShW18SrP7ebK')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-margin-mobile max-w-4xl mx-auto">
        <AnimatedText delay={0}>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-8 leading-tight uppercase">
            &quot;GOOD DESIGN IS FELT BEFORE IT IS EXPLAINED.&quot;
          </h2>
        </AnimatedText>
      </div>
    </section>
  );
}
