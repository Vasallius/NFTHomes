import Head from 'next/head'
//import { Image } from "@chakra-ui/core";
import Navbar from '../components/Navbar'
import Details from '../components/Details'

import { Box, Center, Heading, Image, Text, Flex, Container, Button } from "@chakra-ui/react";
import { ChangeNetwork, ConnectModal, DisconnectButton, Wallet } from "@xircus-web3/components"

import styles from '../styles/card_inside.module.css'
//import styles from '../styles/Home.module.css'


import { Grid, GridItem } from '@chakra-ui/react'
import { Stack, HStack, VStack, StackDivider } from "@chakra-ui/react"
import { fill } from 'lodash'

export default function Home() {
  return (
    <>
      <Navbar />
      <Heading size="xl" ml="16" mt="8">
        Luxury Condo in New York
      </Heading>
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
                  templateColumns='repeat(5, 1fr)'
                  gap={4}
                  color='blackAlpha.700'
                >
                  <GridItem className="rounded-l-lg" rowSpan={2} colSpan={3} bg='tomato' bgImage={"images/listing1.webp"} bgSize={"cover"} bgPosition={"center"} />

                  <GridItem colSpan={1} bg='papayawhip' bgImage={"images/newyork1.webp"} bgSize={"cover"} bgPosition={"center"} />
                  <GridItem className="rounded-tr-lg" colSpan={1} bg='papayawhip' bgImage={"images/newyork2.webp"} bgSize={"cover"} bgPosition={"center"} />
                  <GridItem colSpan={1} bg='papayawhip' bgImage={"images/newyork3.webp"} bgSize={"cover"} bgPosition={"center"} />
                  <GridItem className="rounded-br-lg" colSpan={1} bg='papayawhip' bgImage={"images/newyork4.webp"} bgSize={"cover"} bgPosition={"center"} />
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
                  <GridItem colSpan={3}> <Details /> </GridItem>

                  <GridItem colSpan={3} bg="gray.800" color="white" borderRadius="lg" boxShadow="lg" p="6">
                    <Text fontSize="2xl" fontWeight="semibold" mb="2">
                      Pricing
                    </Text>
                    <Text fontSize="xl" mb="2">
                      $200 <Text as="span" fontSize="md">per night</Text>
                    </Text>
                    <Flex mb="2">
                      <Box mr="2">
                        <Text fontSize="lg">Cleaning fee:</Text>
                      </Box>
                      <Box>
                        <Text fontSize="lg">$50</Text>
                      </Box>
                    </Flex>
                    <Flex mb="2">
                      <Box mr="2">
                        <Text fontSize="lg">Service fee:</Text>
                      </Box>
                      <Box>
                        <Text fontSize="lg">$20</Text>
                      </Box>
                    </Flex>
                    <Flex mb="2">
                      <Box mr="2">
                        <Text fontSize="lg">Occupancy taxes and fees:</Text>
                      </Box>
                      <Box>
                        <Text fontSize="lg">$30</Text>
                      </Box>
                    </Flex>
                    <Flex mb="4">
                      <Box mr="2">
                        <Text fontSize="xl" fontWeight="semibold">Total:</Text>
                      </Box>
                      <Box>
                        <Text fontSize="xl" fontWeight="semibold">$300</Text>
                      </Box>
                    </Flex>
                    <div class="flex items-center">
                      <button type="submit" class="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-700 hover:to-red-700 text-white font-bold py-2 px-4 rounded">List Property</button>
                    </div>
                  </GridItem>


                </Grid>
              </Container>
            </Box>

            <Box>
              <Grid
                h='500px'
                w='1200px'
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(1, 1fr)'
                gap={4}
                color='blackAlpha.700'
              >

                <GridItem colSpan={10}>
                  <div class="flex flex-col items-center justify-center px-6">
                    <h1 class="text-2xl font-bold text-center text-white">Calendar</h1>
                    <p class="flex items-end mt-2 text-base text-center text-gray-400 gap-x-2">Find available 
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-red-500 shrink-0">
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </svg>
                    </p>

                    <div class="grid w-full max-w-xl grid-cols-7 gap-6 mx-auto mt-6">
                      <p class="flex items-center justify-center h-16 text-blue-300">Sa</p>
                      <p class="flex items-center justify-center h-16 text-blue-300">Fr</p>
                      <p class="flex items-center justify-center h-16 text-blue-300">Th</p>
                      <p class="flex items-center justify-center h-16 text-blue-300">We</p>
                      <p class="flex items-center justify-center h-16 text-blue-300">Tu</p>
                      <p class="flex items-center justify-center h-16 text-blue-300">Mo</p>
                      <p class="flex items-center justify-center h-16 text-blue-300">Su</p>
                    </div>

                    <div class="grid w-full max-w-xl grid-cols-7 gap-6 mx-auto">
                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">1</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">2</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">3</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">4</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">5</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">6</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">7</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">8</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">9</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">10</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">11</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">12</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">13</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">14</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">15</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">16</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">17</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">18</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">19</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">20</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">21</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">22</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">23</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">24</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">25</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">26</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">27</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">28</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">29</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">30</div>
                      </div>

                      <div class="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                        <div class="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">31</div>
                      </div>
                    </div>
                  </div>
                </GridItem>

              </Grid>
            </Box>

            <Box>
              <Grid
                h='300px'
                w='1200px'
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(1, 1fr)'
                gap={4}
                color='blackAlpha.700'
              >

                <GridItem colSpan={10}> 
                <div class="flex-container">
  <div>               
     <div class="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="bg-gray-200 text-gray-700 text-lg px-6 py-4">REVIEWS</div>

    <div class="flex justify-between items-center px-6 py-4">
      <div class="bg-blue-400 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">Stayed</div>
      <div class="text-sm text-gray-700">April 2, 2023</div>
    </div>

    <div class="px-6 py-4 border-t border-gray-200">
      <div class="border rounded-lg p-4 bg-gray-200 text-gray-700">
        This place is superb! Beautiful, clean and peaceful place... our worker's loved it. We enjoyed the stay and will definitely come back here again. 🥰 
        <p></p>
        The owner is kind and the caretaker is really nice and accommodating.
      </div>
    </div>

    <div class="bg-gray-200 px-6 py-4">
      <div class="uppercase text-xs text-gray-600 font-bold">Reviewee</div>

      <div class="flex items-center pt-3">
        <div class="bg-blue-700 w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white" style={{borderRadius: '50%', overflow: 'hidden'}}>
          <img src="/images/boredape.jpg"></img>
        </div>
        <div class="ml-4">
          <p class="font-bold text-gray-700">0xa1d...6b7</p>
          <p class="text-sm text-gray-700 mt-1">Bored Ape #6969</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
                </GridItem>

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


