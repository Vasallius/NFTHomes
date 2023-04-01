import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
    <Navbar />

      <Box
        backgroundImage="url('/images/heroimage.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        height="calc(100vh - 80px)"
      >
        <Flex
          height="100%"
          alignItems="center"
          justifyContent="center"
          px={4}
          py={8}
          bgGradient="linear(to-r, gray.800, transparent)"
        >
          <Box maxW="xl" textAlign="center" color="white">
            <Heading size="3xl" mb="4">
              Welcome to NFTHomes!
            </Heading>
            <Text fontSize="xl">
              The web3 alternative to Airbnb
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
