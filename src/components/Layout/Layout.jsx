import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import Head from "next/head";

//styled
import * as S from "./styles";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/facicon.ico"></link>
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <S.MainContainer>{children}</S.MainContainer>
      <Footer />
    </>
  );
}
