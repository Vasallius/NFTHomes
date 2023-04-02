import React from "react";

import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const Landing = () => {
  const listings = [
    {
      id: 1,
      name: "Luxury Condo in New York",
      image: "/images/listing1.webp",
      price: "$200/night",
      rating: "4.8",
      reviews: "12",
    },
    {
      id: 2,
      name: "Beachfront Villa in Bali",
      image: "/images/listing4.webp",
      price: "$300/night",
      rating: "4.9",
      reviews: "18",
    },
    {
      id: 3,
      name: "Mountain Chalet in Switzerland",
      image: "/images/listing3.webp",
      price: "$250/night",
      rating: "4.7",
      reviews: "8",
    },
  ];

  return (
    <>
      <Box>
        <Box
          backgroundImage="url('/images/listings-bg.jpg')"
          backgroundSize="cover"
          height="60vh"
          position="relative"
        >
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
          >
            <Heading size="3xl" mb="4" color="white">
              Find Your <span className="highlight">Dream</span> Home
            </Heading>
            <Text fontSize="xl" color="white">
              Explore unique places to stay and things to do
            </Text>
          </Box>
        </Box>
        <Box p="20">
          <Heading size="xl" mb="4">
            Featured Listings
          </Heading>
          <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gridGap="8">
            {listings.map((listing, key) => (
              <Link href={`/card_inside${listing.id}`} alt={`{key}`}>
                <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  href="/card_infside.js"
                >
                  <Image
                    src={listing.image}
                    alt={listing.name}
                    width="500px"
                    height="200px"
                    objectFit="cover"
                  />
                  <Box p="6">
                    <Heading size="md" mb="2">
                      {listing.name}
                    </Heading>
                    <Text fontSize="md" mb="2">
                      {listing.price}
                    </Text>
                    <Box display="flex" alignItems="center" mb="2">
                      <Box as="span" mr="1">
                        {listing.rating}
                      </Box>
                      <Box as="span" color="gray.600" fontSize="sm">
                        ({listing.reviews} reviews)
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
