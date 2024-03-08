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
import { signinSchema } from "@/schemas/signin.schema";

export default function SigninForm() {
  const form = useForm<z.infer<typeof signinSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signinSchema),
  });

  const submitHandler = async (values: z.infer<typeof signinSchema>) => {
    console.log(values);
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
          <div className="flex items-center justify-between w-full mt-4">
            <Link href="/sign?type=up">
              아직 회원이 아니신가요?
              <br />
              <span className="text-indigo-400 font-semibold">회원가입</span>
              으로 이동하기
            </Link>
            <Button variant="outline" className="bg-indigo-400 text-white">
              로그인
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
