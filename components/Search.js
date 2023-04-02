import React, { useState } from "react";
import {
  Grid,
  GridItem,
  Button,
  ChakraProvider,
  Container,
  Input,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoSearchCircle, IoFilter } from "react-icons/io5";
import SearchFilters from "./SearchFilters";

const Search = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sfVisible, setSfVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [keywords, setKeywords] = useState(query);
  const [properties, setListings] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [searchFilters, setSearchFilters] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  return (
    <ChakraProvider>
      <Container minW="85%">
        <Grid
          templateColumns="2em 2fr 1fr 1fr 1fr 1fr"
          alignItems="center"
          borderRadius="1000px"
          borderWidth="3px"
          borderColor="gray.50"
          boxShadow="0px 0px 10px 1px #fa68a2"
        >
          <GridItem
            justifyContent="center"
            alignItems="center"
            display="flex"
            pl="9"
          >
            <Button variant="unstyled">
              <IoFilter
                type="button"
                color="#58152e"
                cursor="pointer"
                size={20}
                onClick={() => setSfVisible(!sfVisible)}
              />
            </Button>
          </GridItem>
          <GridItem>
            <Input
              borderWidth="0"
              focusBorderColor="transparent"
              placeholder="Location"
            />
          </GridItem>
          <GridItem>
            <Input
              type="date"
              variant="unstyled"
              textColor="gray.500"
              placeholder="Check in"
              pr="5"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
            />
          </GridItem>
          <GridItem>
            <Input
              type="date"
              variant="unstyled"
              textColor="gray.500"
              placeholder="Check out"
              pr="5"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
            />
          </GridItem>
          <GridItem pl="">
            <Button variant="unstyled">No. of Guests</Button>
          </GridItem>
          <GridItem display="flex" pl="40" pr="1">
            <IoSearchCircle
              type="button"
              color="#58152e"
              cursor="pointer"
              size={39}
            />
          </GridItem>
        </Grid>
      </Container>
      {sfVisible && (
        <Container minWidth="90%" mt="-5">
          <SearchFilters
            setKeywords={setKeywords}
            keywords={keywords}
            setQuery={setQuery}
            setPage={setPage}
            setFilters={setSearchFilters}
            filters={searchFilters}
          />
        </Container>
      )}
    </ChakraProvider>
  );
};

export default Search;
