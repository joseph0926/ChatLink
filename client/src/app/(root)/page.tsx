import { Hero } from "@/components/landing/hero";
import { products } from "@/lib/landing-contents";

export default function LandingPage() {
  return (
    <div>
      <Hero products={products} />
    </div>
  );
}
