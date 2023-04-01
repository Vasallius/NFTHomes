import { Avatar, Box, Center, Heading, HStack, Text, VStack } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Box px={10} py={20}>
      <VStack spacing={10}>
        <Avatar size="xl" name="John Doe" src="/images/boredape.jpg" />
        <Heading size="xl">John Doe</Heading>
        <HStack>
          <Box>
            <Text fontSize="2xl">4.5</Text>
            <Text>Rating</Text>
          </Box>
          <Box>
            <Text fontSize="2xl">15</Text>
            <Text>Listings</Text>
          </Box>
          <Box>
            <Text fontSize="2xl">210</Text>
            <Text>Analytics</Text>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Profile;
