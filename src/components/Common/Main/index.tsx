import { FC, ReactNode } from "react";

type Prop = {
  children: ReactNode;
  className?: string;
};

const Main: FC<Prop> = ({ children, className }) => {
  return <main className={className}>{children}</main>;
};

export { Main };
