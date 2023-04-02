import { React, useState } from "react";
import Link from "next/link";
import { propertydata } from "../public/database/propertydata";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import Image from "next/image";
import { Divider, Heading, Stack, Text } from "@chakra-ui/layout";
import { Button, ButtonGroup } from "@chakra-ui/button";

const Properties = () => {
  const [property, setProperty] = useState(propertydata);
  return (
    <>
      <div className="p-14 m-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {property.map((data, key) => {
            if (data) {
              return (
                <div key={`${data.property_id}+${key}`}>
                  <Link href="/" passHref={true}>
                    <Card maxW="20vw">
                      <CardBody>
                        <div className="card">
                          <Image
                            src={data.image_link}
                            alt="Green double couch with wooden legs"
                            borderRadius="lg"
                            width={380}
                            height={100}
                          />
                        </div>
                        <Stack mt="2" spacing="">
                          <Text>
                            {data.lot_type} in {data.city_municip}
                          </Text>
                          <Text fontSize="sm">
                            {data.num_bedrooms}
                            {data.num_bedrooms == 1
                              ? " bedroom"
                              : " bedrooms"}{" "}
                            <b>·</b> {data.unit_num}
                            {data.unit_num == 1 ? " review" : " reviews"}
                          </Text>
                        </Stack>
                        <Stack mt="1">
                          <Text fontSize="sm" as="b">
                            ₱{data.rate} - ₱{data.rate + 1000}
                          </Text>
                        </Stack>
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <ButtonGroup spacing="4">
                          <Button variant="solid" colorScheme="blue" size="sm">
                            Book Now
                          </Button>
                          <Button variant="ghost" colorScheme="blue" size="sm">
                            Reserve
                          </Button>
                        </ButtonGroup>
                      </CardFooter>
                    </Card>
                  </Link>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      <style jsx>
        {`
          .card {
            overflow: hidden;
            border-radius: 5px;
            height: 7em;
          }
        `}
      </style>
    </>
  );
};

export default Properties;
