import { FC, ReactNode } from "react";

type Prop = {
  children?: ReactNode;
};
const Footer: FC<Prop> = ({ children }) => {
  return <footer>{children}</footer>;
};
export { Footer };
