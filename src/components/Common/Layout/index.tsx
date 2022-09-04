import { FC, ReactNode } from "react";
import { Header, Navbar } from "..";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
export { Layout };
