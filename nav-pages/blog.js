import React, { useContext } from "react";
import { Context, changePage } from "../context/context";
import Head from "next/head";
import HeaderNav from "../components/HeaderNav";
import NumberScroll from "../components/NumberScroll";
import FooterBar from "../components/Footer";
import { useMedia } from "../hooks/useMedia";
import AnnoucementBanner from "../components/AnnoucementBanner";

export default function Blog() {
  const { state, dispatch } = useContext(Context);
  const isBrowser = () => typeof window !== "undefined";
  let smallScreen;
  if (isBrowser) {
    smallScreen = useMedia("(max-width: 1100px)");
  }

  return (
    <>
      <AnnoucementBanner />
      <div className="container">
        <Head>
          <title>
            DocSpera | HIPAA Compliant, Integrated Surgical Coordination
            Platform
          </title>
          <link
            rel="icon"
            href="https://assets.d4.docspera.com/home/favicon.ico"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <HeaderNav />

        <iframe
          src="https://blog.d4.docspera.com/"
          width="100%"
          style={{
            border: "none",
            height: "calc(100vh - 100px)",
            width: "100%",
          }}
        />

        <FooterBar />
        <style jsx>{`
          .container {
            width: 100%;
          }
        `}</style>
      </div>
    </>
  );
}
