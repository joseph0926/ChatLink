"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { signup } from "@/services/auth.service";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/ui/file-upload";
import { signupSchema } from "@/schemas/signup.schema";

export default function SignupForm() {
  const form = useForm<z.infer<typeof signupSchema>>({
    defaultValues: {
      nickname: "",
      email: "",
      password: "",
      profileImage: "",
    },
    resolver: zodResolver(signupSchema),
  });

  const submitHandler = async (values: z.infer<typeof signupSchema>) => {
    try {
      const data = await signup(values);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full lg:w-1/2 p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">ChatLink</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className="flex flex-col gap-4 w-[60%]"
        >
          <FormField
            control={form.control}
            name="nickname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-bold">Nickname</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
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
                <FormLabel className="text-lg font-bold">Email</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
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
                <FormLabel className="text-lg font-bold">Password</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
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
                <FormLabel className="text-lg font-bold">
                  ProfileImage
                </FormLabel>
                <FormControl>
                  <FileUpload
                    endpoint="serverImage"
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between w-full mt-4">
            <Link href="/sign?type=in">
              이미 회원이신가요?
              <br />
              <span className="text-indigo-400 font-semibold">로그인</span>
              으로 이동하기
            </Link>
            <Button variant="outline" className="bg-indigo-400 text-white">
              회원가입
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
