import Head from "next/head";
import { Container, Heading, VStack, Box } from "@chakra-ui/react";
import {
  ChangeNetwork,
  ConnectModal,
  DisconnectButton,
  OutlineCard,
  Wallet,
} from "@xircus-web3/components";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Head>
        <title>Xircus | with Components</title>
        <meta name="description" content="Template created by Xircus" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Container></Container>
    </>
  );
}
