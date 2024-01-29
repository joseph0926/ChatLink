import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <div className="w-full md:flex">
      <Navbar />
      <Sidebar />
      <section className="ml-0 flex h-full flex-1 md:ml-[270px]">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default RootPage;
