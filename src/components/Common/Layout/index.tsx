import { FC, ReactNode } from "react";
import { Footer, Header, Navbar } from "..";

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
      <Footer />
    </>
  );
};
export { Layout };
