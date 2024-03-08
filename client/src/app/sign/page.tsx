import SignUi from "@/components/auth/sign-ui";
import SigninForm from "@/components/auth/signin-form";
import SignupForm from "@/components/auth/signup-form";

export default function SignPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <section className="h-screen">
      <div className="mx-auto flex w-full justify-center h-full flex-col lg:!flex-row">
        {searchParams?.type === "up" ? <SignupForm /> : <SigninForm />}
        <div
          className="w-full lg:w-1/2 bg-indigo-600 px-2 py-40 sm:py-48 sm:px-12 flex flex-col justify-center relative bg-no-repeat bg-center bg-cover h-full"
          style={{
            backgroundImage: "url(https://cdn.tuk.dev/assets/Image.jpg)",
          }}
        >
          <SignUi />
        </div>
      </div>
    </section>
  );
}
