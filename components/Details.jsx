import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";

export default function Details() {
  return (
    <Box bg="gray.900" color="white">
      <Container maxW="container.xl" p="12">
        <Grid templateColumns="repeat(6, 1fr)" gap={6}>
          <GridItem colSpan={3}>
            <Text fontSize="xl" fontWeight="bold" mb="4">
              About this space
            </Text>
            <ul>
              <li>- Relax and unwind in peaceful surroundings</li>
              <li>- Breathtaking penthouse view of Manhattan skyline</li>
              <li>- First-class pool amenities</li>
              <li>- Fully furnished with well-designed interiors</li>
              <li>- 5 minutes away from the Mall of America and Manhattan Yacht Club</li>
              <li>- Across from the Cultural Center of the Philippines complex</li>
            </ul>
          </GridItem>
          <GridItem colSpan={3}>
            <Text fontSize="xl" fontWeight="bold" mb="4">
              The space
            </Text>
            <Text mb="4">
              Well-designed suite unit complete with new furnishings, Netflix, cable, and wifi for your convenience.
            </Text>
            <Text fontSize="lg" fontWeight="bold" mb="4">
              Guest access
            </Text>
            <ul>
              <li>Guests can access the grand lobby and the two side outdoor pools, along with tables and playgrounds for kids. </li>
              <br></br>
            </ul>
            <Text fontSize="lg" fontWeight="bold" mb="4">
              Other things to note
            </Text>
            <Text>
              This unit is newly renovated and designed as a VIP suite for local and foreign staycations, offering an extraordinary view of the Manhattan skyline from the balcony.
            </Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
