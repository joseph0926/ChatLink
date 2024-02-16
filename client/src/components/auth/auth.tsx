import { useEffect, useState, useTransition } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { CardWrapper } from '@/components/ui/card-wrapper';
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/ui/form-error';
import { FormSuccess } from '@/components/ui/form-success';
import { Switch } from '@/components/ui/switch';
import { SigninSchema, SignupSchema } from '@/lib/validation';
import { Label } from '../ui/label';

export default function Auth() {
  const location = useLocation();
  const [_searchParams, setSearchParams] = useSearchParams();
  const urlParams = new URLSearchParams(location.search);
  const authType = urlParams.get('authType');

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [schema, setSchema] = useState(SigninSchema);

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues:
      authType === 'in'
        ? {
            email: '',
            password: ''
          }
        : {
            username: '',
            email: '',
            password: ''
          }
  });

  const submitHandler = (values: z.infer<typeof schema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      console.log(values);
    });
  };

  useEffect(() => {
    if (!authType) {
      setSearchParams({ authType: 'in' });
    }

    authType === 'in' ? setSchema(SigninSchema) : setSchema(SignupSchema);

    form.reset();
  }, [authType]);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <CardWrapper
        headLabel={authType === 'in' ? 'SignIn' : 'SignUp'}
        FooterComponent={
          <div className="flex w-full items-center gap-x-2">
            <Label>Signup</Label>
            <Switch onCheckedChange={() => setSearchParams({ authType: authType === 'in' ? 'up' : 'in' })} checked={authType === 'in'} />
            <Label>Signin</Label>
          </div>
        }
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-6">
            <div className="space-y-4">
              {authType === 'up' && (
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button disabled={isPending} type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
}
