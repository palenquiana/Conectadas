import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <header>
        <nav></nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
export { Layout };
