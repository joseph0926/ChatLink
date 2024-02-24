import LandingNavbar from '@/components/layout/landing-navbar';

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-900">
      <LandingNavbar />
      {children}
    </div>
  );
}
