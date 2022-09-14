import { FC, ReactNode } from "react";
import { Footer, Header, Main, Navbar } from "..";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
export { Layout };
