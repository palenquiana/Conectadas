import { FC, ReactNode } from "react";
import { Footer, Header, Main, Navbar } from "..";

type Props = {
  children: ReactNode;
  hideNav?: boolean;
  page?: string;
};

const Layout: FC<Props> = ({ children, hideNav, page }) => {
  return (
    <>
      <Header>{!hideNav && <Navbar />}</Header>
      <Main className={`page page-${page}`}>{children}</Main>
      <Footer />
    </>
  );
};
export { Layout };
