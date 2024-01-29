import { useAuth } from "@/hooks/useAuth";
import { Outlet, Navigate } from "react-router-dom";

const AuthPage = () => {
  const { currentUser, isGetCurrntUserLoading } = useAuth();

  return (
    <>
      {!isGetCurrntUserLoading && currentUser && currentUser.user ? (
        <Navigate to="/" />
      ) : (
        <div className="flex items-center justify-between">
          <section className="flex flex-1 flex-col items-center justify-center py-10">
            <Outlet />
          </section>

          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="hidden h-screen flex-1 bg-no-repeat object-cover xl:block"
          />
        </div>
      )}
    </>
  );
};

export default AuthPage;
