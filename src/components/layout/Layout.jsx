import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ padding: "24px" }}>{children}</main>
      <Footer />
    </>
  );
}
