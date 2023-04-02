import {
    Card,
    CardBody,
    Center,
    Container,
    Flex,
    HStack,
    Image,
    Stack,
    Text,
    VStack,
    ChakraProvider,
  } from "@chakra-ui/react";
  import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
  import ReactPaginate from "react-paginate";
import React, { useState, useEffect } from 'react'
import { propertydata } from "../public/database/propertydata";
import Head from "next/head";

const Pagination = () => {
    const [page, setPage] = useState(0);
    const [pageCount, setpageCount] = useState(0);
    
    useEffect(() => {
        const getListings = async () => {
          const total = propertydata.length//[0].count;
        
          setpageCount(Math.ceil(total / 10));
          
        };
        getListings();
      }, []);
    
      const handlePageClick = async (data) => {
        setPage(data.selected);
      };
      
    
      return (
        
          <Container minW="100%">
            <Container mt="2em" mb="2em" centerContent>
              <ReactPaginate
                previousLabel={<ArrowBackIcon style={{ fontSize: 18 }} />}
                nextLabel={<ArrowForwardIcon style={{ fontSize: 18 }} />}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                pageClassName={"item pagination-page "}
                pageLinkClassName={"item page-link"}
                previousClassName={"item previous"}
                previousLinkClassName={"item page-link"}
                nextClassName={"item next"}
                nextLinkClassName={"item page-link"}
                breakClassName={"item"}
                breakLinkClassName={"item page-link"}
                activeClassName={"page-active"}
                disabledClassName={"disabled-page"}
                forcePage={page}
              />
            </Container>
            
          </Container>
        
      );
    }
export default Pagination