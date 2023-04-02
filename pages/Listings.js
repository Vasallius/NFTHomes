import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Listings() {
  return (
    <div>
      <Head>
        <title>List Your Property</title>
        <meta name="description" content="List your property on our platform" />
      </Head>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900">List Your Property</h1>
        <p className="mt-4 text-lg text-gray-500">Fill out the form below to list your property on our platform.</p>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="property-name" className="sr-only">
                Property Name
              </label>
              <input
                id="property-name"
                name="property-name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Property Name"
              />
            </div>
            <div>
              <label htmlFor="property-description" className="sr-only">
                Property Description
              </label>
              <textarea
                id="property-description"
                name="property-description"
                rows={3}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Property Description"
              />
            </div>
            <div>
              <label htmlFor="property-address" className="sr-only">
                Property Address
              </label>
              <input
                id="property-address"
                name="property-address"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Property Address"
              />
            </div>
          </div>
          <div className="flex items-center justify-end mt-6">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              List Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
