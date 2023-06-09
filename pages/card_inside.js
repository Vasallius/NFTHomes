import Head from 'next/head'
import Image from 'next/image'
//import { Image } from "@chakra-ui/core";
import Navbar from '../components/Navbar'

import { Container, Heading, Box } from '@chakra-ui/react'
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
                <GridItem rowSpan={2} colSpan={3} bg='tomato' bgImage={"url('/images/up-oblation.jpg')"} bgSize={"cover"} bgPosition={"center"} />

                <GridItem colSpan={1} bg='papayawhip' bgImage={"url('/images/up-gyud_food.webp')"} bgSize={"cover"} bgPosition={"center"} />
                <GridItem colSpan={1} bg='papayawhip' bgImage={"url('/images/up-melchor.jpg')"} bgSize={"cover"} bgPosition={"center"} />
                <GridItem colSpan={1} bg='papayawhip' bgImage={"url('/images/up-dcs.jpg')"} bgSize={"cover"} bgPosition={"center"} />
                <GridItem colSpan={1} bg='papayawhip' bgImage={"url('/images/up-a2.jpg')"} bgSize={"cover"} bgPosition={"center"} />
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
                <GridItem colSpan={3}> 
                
<div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <li class="mr-2">
            <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" class="inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500">About</button>
        </li>
        <li class="mr-2">
            <button id="services-tab" data-tabs-target="#services" type="button" role="tab" aria-controls="services" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Services</button>
        </li>
        <li class="mr-2">
            <button id="statistics-tab" data-tabs-target="#statistics" type="button" role="tab" aria-controls="statistics" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Facts</button>
        </li>
    </ul>
    <div id="defaultTabContent">
        <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
            <h2 class="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Powering innovation & trust at 200,000+ companies worldwide</h2>
            <p class="mb-3 text-gray-500 dark:text-gray-400">Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.</p>
            <a href="#" class="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                Learn more
                <svg class="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="services" role="tabpanel" aria-labelledby="services-tab">
            <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">We invest in the world’s potential</h2>
            <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
                <li class="flex space-x-2">
                    <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span class="leading-tight">Dynamic reports and dashboards</span>
                </li>
                <li class="flex space-x-2">
                    <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span class="leading-tight">Templates for everyone</span>
                </li>
                <li class="flex space-x-2">
                    <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span class="leading-tight">Development workflow</span>
                </li>
                <li class="flex space-x-2">
                    <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span class="leading-tight">Limitless business automation</span>
                </li>
            </ul>
        </div>
        <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="statistics" role="tabpanel" aria-labelledby="statistics-tab">
            <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <div class="flex flex-col">
                    <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Developers</dd>
                </div>
                <div class="flex flex-col">
                    <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Public repositories</dd>
                </div>
                <div class="flex flex-col">
                    <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Open source projects</dd>
                </div>
            </dl>
        </div>
    </div>
</div>


                </GridItem>
                
                <GridItem colSpan={3} bg='papayawhip' > Pricing </GridItem>
              </Grid>
            </Container>
          </Box>

          <Box>
            <Grid
                h='1100px'
                w='1200px'
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(1, 1fr)'
                gap={4}
                color='blackAlpha.700'
              >

              <GridItem colSpan={10} bg='papayawhip' > 
<div class="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-900">
    <h1 class="text-2xl font-bold text-center text-white">Tailwind CSS Calender with Hover Effect</h1>
    <p class="flex items-end mt-2 text-base text-center text-gray-400 gap-x-2">Built using HTML, Tailwind CSS, and JavaScript. Like and Share for more awesome content
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
{        `This place is superb! Beautiful, clean and peaceful place... our worker's loved it. We enjoyed the stay and will definitely come back here again. `
}        <p></p>
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
          </Box>
        </VStack>
      </main>



      <footer className={styles.footer}>
      </footer>
    </div>
    </>
  )
}


