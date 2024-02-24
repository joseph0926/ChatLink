import MainNavbar from '@/components/layout/main-navbar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainNavbar />
      <div className="p-6">{children}</div>
    </>
  );
}
