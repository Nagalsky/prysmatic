import React, { Fragment } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout({ children, ...restProps }) {
  return (
    <Fragment {...restProps}>
      <Header />

      <main>{children}</main>

      <Footer />
    </Fragment>
  );
}
