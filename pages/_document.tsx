import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import Header from "../components/Navigation/Header";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <Header />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
