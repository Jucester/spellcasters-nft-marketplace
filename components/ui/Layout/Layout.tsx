import Head from "next/head";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import React, { FC, PropsWithChildren } from "react";

type PropsWithChildrenAndCustomFields = PropsWithChildren & {
  title?: string;
};

const Layout: FC<PropsWithChildrenAndCustomFields> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title> {title || "Spellscasters"} </title>
        <meta name="author" content="Jucel" />
        <meta name="description" content="info" />
        <meta name="keywords" content="Pokemon" />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Una página con muchos detalles acerca de ${title}`}
        />
        <meta property="og:image" content={`${origin}/banner.png`} />
      </Head>

      <Navbar />
      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
