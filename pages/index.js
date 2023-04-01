import Head from 'next/head'
import { Container, Heading, VStack, Box } from '@chakra-ui/react'
import { ChangeNetwork, ConnectModal, DisconnectButton, Wallet } from "@xircus-web3/components"

export default function Home() {
  return (
    <>
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
          </ConnectModal>      
        </VStack>
      </Container>
    </>
  )
}
