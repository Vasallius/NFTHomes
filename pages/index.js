import Head from 'next/head'
import { Container, Heading, VStack, Box } from '@chakra-ui/react'
import { ChangeNetwork, ConnectModal, DisconnectButton, OutlineCard, Wallet } from "@xircus-web3/components"
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Head>
        <title>Xircus | with Components</title>
        <meta name="description" content="Template created by Xircus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <VStack h="100vh" justify="center">
          <Heading>with Xircus Components</Heading>
          <ConnectModal>
            <Wallet />
            <ChangeNetwork maxW="300px" />
            <DisconnectButton>Disconnect</DisconnectButton>
            <Box>This is a wallet gated content</Box>
            <OutlineCard
              title="Example Card"
              label="This is a sample label"
              color="blue.500"
              theme={{ header: { mb: 2 }, title: { color: "blue.600" }, label: { fontSize: "sm" } }}>
              <p>This is the content of the card</p>
            </OutlineCard>
          </ConnectModal>
        </VStack>
        <OutlineCard />
      </Container>
    </>
  )
}
