import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

import { Container, Heading, Box } from '@chakra-ui/react'
import { ChangeNetwork, ConnectModal, DisconnectButton, Wallet } from "@xircus-web3/components"
import styles from '../styles/Home.module.css'

import { Grid, GridItem } from '@chakra-ui/react'
import { Stack, HStack, VStack, StackDivider } from "@chakra-ui/react"

export default function Home() {
  return (
    <>
    <Navbar />
    
    <div className={styles.container}>
      <Head>s
        <title>NFTHomes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          <Box>
            <Container centerContent>
              <Grid
                h='600px'
                w='1200px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(10, 1fr)'
                gap={4}
                color='blackAlpha.700'
              >
                <GridItem rowSpan={2} colSpan={6} bg='tomato' > Hero Image </GridItem>
                <GridItem colSpan={2} bg='papayawhip' > Subpics </GridItem>
                <GridItem colSpan={2} bg='papayawhip' > Subpics </GridItem>
                <GridItem colSpan={2} bg='papayawhip' > Subpics </GridItem>
                <GridItem colSpan={2} bg='papayawhip' > Subpics </GridItem>
              </Grid>
            </Container>
          </Box>

          <Box>
            <Container centerContent>
              <Grid
                h='600px'
                w='1200px'
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(6, 1fr)'
                gap={4}
                color='blackAlpha.700'
              >
                <GridItem colSpan={3} bg='tomato' > Details </GridItem>
                
                <GridItem colSpan={3} bg='papayawhip' > Pricing </GridItem>
              </Grid>
            </Container>
          </Box>

          <Box>
            <Grid
                h='600px'
                w='1200px'
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(1, 1fr)'
                gap={4}
                color='blackAlpha.700'
              >

              <GridItem colSpan={10} bg='papayawhip' > Calendar </GridItem>

            </Grid>
          </Box>

          <Box>
            <Grid
                h='600px'
                w='1200px'
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(1, 1fr)'
                gap={4}
                color='blackAlpha.700'
              >

              <GridItem colSpan={10} bg='papayawhip' > Reviews </GridItem>

            </Grid>
          </Box>
        </VStack>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
    </>
  )
}


