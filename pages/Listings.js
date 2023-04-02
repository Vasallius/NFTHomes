import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { Divider } from "@chakra-ui/react";

export default function Listings() {
  return (
    <div className="bg-gray-900 text-white">
      <Head>
        <title>List Your Property</title>
        <meta name="description" content="List your property on our platform" />
      </Head>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="text-3xl highlight font-extrabold bg-gradient-to-r from-f0516f to-c91e77 bg-clip-text">List Your Property</span>

        <div class="flex justify-between ">
          <div class="flex justify-center mt-8 flex-grow">
            <div class="rounded-lg shadow-xl bg-gray-50 flex justify-center">
              <div class="m-4 flex justify-center">

                <div class="flex items-center justify-center w-full">
                  <label class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                      <svg xmlns="http://www.w3.org/2000/svg"
                        class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clip-rule="evenodd" />
                      </svg>
                      <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                        Select a photo</p>
                    </div>
                    <input type="file" class="opacity-0" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-grow">

            <form class="max-w-lg mx-auto mt-8">
              <div class="mb-4">
                <label for="property-name" class="block text-white  font-bold mb-2">Property Name</label>
                <input type="text" id="property-name" name="property-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the property name" required />
              </div>
              <div class="mb-4">
                <label for="property-name" class="block text-white  font-bold mb-2">Address</label>
                <input type="text" id="property-name" name="property-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the property name" required />
              </div>
              <div class="mb-4">
                <label for="property-description" class="block text-white  font-bold mb-2">Property Description</label>
                <textarea id="property-description" name="property-description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a brief description of the property" required></textarea>
              </div>
              <div class="mb-4">
                <label for="price" class="block text-white font-bold mb-2  ">Price per night</label>
                <div class="flex items-center">
                  <span class="rounded-l-md bg-gray-50 text-gray-900 px-3 py-2.5 text-sm font-medium">USDT</span>
                  <input type="number" id="price" name="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the price per night" required />
                </div>
              </div>
              <div class="flex items-center">
                <button type="submit" class="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-700 hover:to-red-700 text-white font-bold py-2 px-4 rounded">List Property</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
