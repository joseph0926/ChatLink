'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

type CardWrapperType = React.PropsWithChildren<{
  headLabel: string;
  FooterComponent: React.JSX.Element;
}>;

export const CardWrapper = ({ headLabel, children, FooterComponent }: CardWrapperType) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader className="text-3xl font-semibold">{headLabel}</CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>{FooterComponent}</CardFooter>
    </Card>
  );
};
