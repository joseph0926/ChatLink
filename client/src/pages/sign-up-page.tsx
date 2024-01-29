import * as z from "zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { SignupValidation } from "@/schemas";
import { useAuth } from "@/hooks/useAuth";

const SignUpPage = () => {
  const navigate = useNavigate();

  const { signupMutation, signinMutation, isSignupLoading, isSigninLoading } =
    useAuth();

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      profileImage: "",
    },
  });

  const signupHandler = async (user: z.infer<typeof SignupValidation>) => {
    try {
      const newUser = await signupMutation(user);

      if (!newUser?.user) {
        return;
      }

      const token = await signinMutation({
        username: user.email,
        password: user.password,
      });

      if (!token) {
        navigate("/sign-in");

        return;
      }

      form.reset();

      navigate("/");
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Form {...form}>
      <div className="flex-center flex-col sm:w-420">
        <img src="/assets/images/logo.svg" alt="logo" />

        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
          Create a new account
        </h2>
        <p className="small-medium md:base-regular mt-2 text-light-3">
          To use snapgram, Please enter your details
        </p>

        <form
          onSubmit={form.handleSubmit(signupHandler)}
          className="mt-4 flex w-full flex-col gap-5">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Username</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Email</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="profileImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">ProfileImage</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="shad-button_primary">
            {isSignupLoading || isSigninLoading ? (
              <div className="flex-center gap-2">
                <Loader /> Loading...
              </div>
            ) : (
              "Sign Up"
            )}
          </Button>

          <p className="text-small-regular mt-2 text-center text-light-2">
            Already have an account?
            <Link
              to="/auth/sign-in"
              className="text-small-semibold ml-1 text-primary-500">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SignUpPage;
