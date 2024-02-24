import BrandLogo from '@/components/landing/brand-logo';
import CTA from '@/components/landing/cta';
import Feature from '@/components/landing/feature';
import Footer from '@/components/landing/footer';
import Hero from '@/components/landing/hero';
import Stats from '@/components/landing/stats';

export default function LandingPage() {
  return (
    <>
      <main>
        <Hero />
        <BrandLogo />
        <Feature />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
