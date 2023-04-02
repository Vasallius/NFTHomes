import React from "react";
import Link from "next/link";

import { Box, Heading, Image, Progress, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Invest = () => {
  const estatelistings = [
    {
      id: 1,
      name: "Luxury Condo",
      location: "New York",
      description:
        "Charming 2-bedroom home with plenty of natural light and a cozy fireplace. Conveniently located in the heart of downtown New York near shops, restaurants, and entertainment",
      target_fund: 270000,
      current_funds: 230000,
      image: "/images/listing1.webp",
      holders: 400,
    },
    {
      id: 2,
      name: "Modern Loft",
      location: "San Francisco",
      description:
        "Stylish 1-bedroom loft with high ceilings and modern finishes. Located in the trendy Mission district near shops, cafes, and nightlife.",
      target_fund: 150000,
      current_funds: 120000,
      image: "/images/listing5.jpg",
      holders: 250,
    },
    {
      id: 3,
      name: "Spacious Townhouse",
      location: "Toronto",
      description:
        "Bright and spacious 3-bedroom townhouse with an open-concept design and plenty of storage space. Conveniently located in the family-friendly North York neighborhood near parks, schools, and transit.",
      target_fund: 350000,
      current_funds: 290000,
      image: "/images/listing3.webp",
      holders: 500,
    },
    {
      id: 4,
      name: "Luxury Villa",
      location: "Bali",
      description:
        "Stunning 4-bedroom villa with a private pool and breathtaking views. Located in the exclusive Uluwatu area near top-rated restaurants and world-renowned surf spots.",
      target_fund: 500000,
      current_funds: 450000,
      image: "/images/listing4.webp",
      holders: 800,
    },
    {
      id: 5,
      name: "Beachfront Condo",
      location: "Miami",
      description:
        "Beautiful 1-bedroom beachfront condo with stunning ocean views. Located in the heart of South Beach near world-class dining, shopping, and entertainment.",
      target_fund: 250000,
      current_funds: 200000,
      image: "/images/newyork2.webp",
      holders: 350,
    },
    {
      id: 6,
      name: "Rustic Cabin",
      location: "Aspen",
      description:
        "Cozy 2-bedroom cabin with a rustic feel and a wood-burning stove. Nestled in the mountains just a short drive from downtown Aspen and its world-famous ski slopes.",
      target_fund: 200000,
      current_funds: 180000,
      image: "/images/newyork3.webp",
      holders: 300,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-14">
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gridGap="8">
          {estatelistings.map((estate) => (
            <Box
              key={estate.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                src={estate.image}
                alt={estate.name}
                width="500px"
                height="200px"
                objectFit="cover"
              />
              <Box p="6">
                <Heading size="md" mb="2">
                  {estate.name} in {estate.location}
                </Heading>
                <Text fontSize="md" mb="2">
                  {estate.description}
                </Text>
                <Progress
                  size="sm"
                  value={(estate.current_funds / estate.target_fund) * 100}
                />

                <Box display="flex" alignItems="center" mt="2">
                  <Box as="span" mr="1">
                    Ŧ {estate.current_funds} Raised
                  </Box>
                  <Box as="span" color="gray.600" fontSize="sm">
                    (
                    {Math.round(
                      (estate.current_funds / estate.target_fund) * 100
                    )}
                    %)
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </div>
    </>
  );
};

export default Invest;
