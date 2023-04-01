import { Box, Center, Heading, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />

            <Box
                height="calc(100vh - 80px)"
                backgroundImage="url('/images/heroimage.png')"
                backgroundSize="cover"
            >
                <Center height="100%">
                    <Box textAlign="center" color="white">
                        <Heading size="3xl" mb="4">
                            Welcome to NFTHomes!
                        </Heading>
                        <Text fontSize="xl">The web3 alternative to Airbnb</Text>
                    </Box>
                </Center>
            </Box>
        </>
    );
};

export default Home;
