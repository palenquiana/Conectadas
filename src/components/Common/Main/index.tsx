import { FC, ReactNode } from "react";

type Prop = {
  children: ReactNode;
};

const Main: FC<Prop> = ({ children }) => {
  return <main>{children}</main>;
};

export { Main };
