import CTA from '@/components/landing/cta';
import Feature from '@/components/landing/feature';
import Footer from '@/components/landing/footer';
import HeroAnim from '@/components/landing/hero-anim';
import Stats from '@/components/landing/stats';
import { TracingBeam } from '@/components/ui/tracing-beam';

export default function LandingPage() {
  return (
    <TracingBeam>
      <main>
        <HeroAnim />
        <Feature />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </TracingBeam>
  );
}
