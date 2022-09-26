import { FC, ReactNode } from "react";
import { Footer, Header, Main, Navbar } from "..";

type Props = {
  children: ReactNode;
  hideNav?: boolean;
  hideHeader?: boolean;
  page?: string;
};

const Layout: FC<Props> = ({ children, hideNav, page, hideHeader }) => {
  return (
    <>
      {!hideHeader && <Header>{!hideNav && <Navbar />}</Header>}
      <Main className={`page page-${page}`}>{children}</Main>
      <Footer />
    </>
  );
};
export { Layout };
