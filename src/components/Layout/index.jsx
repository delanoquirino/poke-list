//components
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import Head from "next/head";

//styled
import * as S from "./styles";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/facicon.ico"></link>
        <title>PokeList</title>
      </Head>
      <Navbar />
      <S.MainContainer>{children}</S.MainContainer>
      <Footer />
    </>
  );
}
