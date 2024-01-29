import { Outlet, Navigate } from "react-router-dom";

const AuthPage = () => {
  return (
    <>
      {/* {isAuthenticated ? (
        <Navigate to="/" />
      ) : ( */}
      <>
        <section className="flex flex-1 flex-col items-center justify-center py-10">
          <Outlet />
        </section>

        <img
          src="/assets/images/side-img.svg"
          alt="logo"
          className="hidden h-screen w-1/2 bg-no-repeat object-cover xl:block"
        />
      </>
      {/* )} */}
    </>
  );
};

export default AuthPage;
