import Head from "next/head";
import Navbar from "../components/Navbar";
import Properties from "./Properties";

export default function Home() {
  return (
    <>
      <Navbar />
      <Head>
        <title>Xircus | with Components</title>
        <meta name="description" content="Template created by Xircus" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Properties />
    </>
  );
}
