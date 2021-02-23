import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Title from "../components/Title"


const Buttons = () => {
  const siteTitle = "Buttons Example"

  return (
    <Layout>
      <SEO title={siteTitle} />
      <Title>{siteTitle}</Title>
      <div className="bg-blue-800 bg-opacity-60 ">
        <div className="bg-gray-700 bg-opacity-50 p-4">
          <div className="container mx-auto flex flex-wrap my-6 justify-center">
            <h3 className="text-2xl capitalize font-medium py-5">
              gray Buttons
            </h3>
            <div className="w-full text-center mx-auto">
              <button
                type="button"
                className="border border-gray-400 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-gray-200 hover:bg-opacity-40 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-gray-500 text-gray-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-gray-300 hover:bg-opacity-40 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-gray-600 text-gray-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-gray-400 hover:bg-opacity-40 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-gray-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-gray-500 hover:bg-opacity-40 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-gray-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-gray-600 hover:bg-opacity-40 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-gray-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-gray-700 hover:bg-opacity-40 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-gray-800 hover:bg-opacity-40 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-gray-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-gray-900 hover:bg-opacity-40 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-gray-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-gray-700 hover:bg-opacity-40 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
            </div>
            <h3 className="text-2xl capitalize font-medium py-5">
              Gray Buttons
            </h3>
            <div className="w-full text-center mx-auto">
              <button
                type="button"
                className="border border-gray-400 bg-gray-100 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-gray-200 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-gray-500 bg-gray-200 text-gray-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-gray-300 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-gray-600 bg-gray-300 text-gray-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-gray-400 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-gray-400 bg-gray-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-gray-500 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-gray-500 bg-gray-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-gray-600 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-gray-600 bg-gray-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-gray-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-gray-800 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-gray-800 bg-gray-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-gray-900 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-gray-900 bg-gray-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-gray-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
            </div>

            <h3 className="text-2xl capitalize font-medium py-5">
              red Buttons
            </h3>
            <div className="w-full text-center mx-auto">
              <button
                type="button"
                className="border border-red-400 bg-red-100 text-red-700 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-red-200 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-red-500 bg-red-200 text-red-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-red-300 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-red-600 bg-red-300 text-red-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-red-400 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-red-400 bg-red-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-red-500 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-red-600 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-red-600 bg-red-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-red-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-red-700 bg-red-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-red-800 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-red-800 bg-red-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-red-900 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-red-900 bg-red-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-red-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
            </div>
            <h3 className="text-2xl capitalize font-medium py-5">
              orange Buttons
            </h3>
            <div className="w-full text-center mx-auto">
              <button
                type="button"
                className="border border-orange-400 bg-orange-100 text-orange-700 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-orange-200 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-orange-500 bg-orange-200 text-orange-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-orange-300 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-orange-600 bg-orange-300 text-orange-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-orange-400 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-orange-400 bg-orange-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-orange-500 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-orange-500 bg-orange-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-orange-600 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-orange-600 bg-orange-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-orange-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-orange-700 bg-orange-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-orange-800 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-orange-800 bg-orange-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-orange-900 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-orange-900 bg-orange-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-orange-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
            </div>
            <h3 className="text-2xl capitalize font-medium py-5">
              amber Buttons
            </h3>
            <div className="w-full text-center mx-auto">
              <button
                type="button"
                className="border border-amber-400 bg-amber-100 text-amber-700 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-amber-200 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-amber-500 bg-amber-200 text-amber-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-amber-300 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-amber-600 bg-amber-300 text-amber-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-amber-400 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-amber-400 bg-amber-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-amber-500 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-amber-500 bg-amber-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-amber-600 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-amber-600 bg-amber-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-amber-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-amber-700 bg-amber-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-amber-800 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-amber-800 bg-amber-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-amber-900 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-amber-900 bg-amber-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-amber-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
            </div>
            <h3 className="text-2xl capitalize font-medium py-5">
              yellow Buttons
            </h3>
            <div className="w-full text-center mx-auto">
              <button
                type="button"
                className="border border-yellow-400 bg-yellow-100 text-yellow-700 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-yellow-200 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-yellow-500 bg-yellow-200 text-yellow-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-yellow-300 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-yellow-600 bg-yellow-300 text-yellow-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-yellow-400 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-yellow-400 bg-yellow-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-yellow-500 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-yellow-600 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-yellow-600 bg-yellow-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-yellow-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-yellow-700 bg-yellow-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-yellow-800 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-yellow-800 bg-yellow-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-yellow-900 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-yellow-900 bg-yellow-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-yellow-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
            </div>
            <h3 className="text-2xl capitalize font-medium py-5">
              lime Buttons
            </h3>
            <div className="w-full text-center mx-auto">
              <button
                type="button"
                className="border border-lime-400 bg-lime-100 text-lime-700 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-lime-200 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-lime-500 bg-lime-200 text-lime-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-lime-300 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-lime-600 bg-lime-300 text-lime-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-lime-400 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-lime-400 bg-lime-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-lime-500 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-lime-500 bg-lime-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-lime-600 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-lime-600 bg-lime-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-lime-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-lime-700 bg-lime-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-lime-800 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-lime-800 bg-lime-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-lime-900 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-lime-900 bg-lime-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-lime-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
            </div>
            <h3 className="text-2xl capitalize font-medium py-5">
              green Buttons
            </h3>
            <div className="w-full text-center mx-auto">
              <button
                type="button"
                className="border border-green-400 bg-green-100 text-green-700 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-green-200 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-green-500 bg-green-200 text-green-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-green-300 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-green-600 bg-green-300 text-green-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-green-400 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-green-400 bg-green-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-green-500 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-green-600 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-green-600 bg-green-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-green-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-green-700 bg-green-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-green-800 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-green-800 bg-green-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-green-900 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-green-900 bg-green-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-green-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
            </div>
            <h3 className="text-2xl capitalize font-medium py-5">
              cyan Buttons
            </h3>
            <div className="w-full text-center mx-auto">
              <button
                type="button"
                className="border border-cyan-400 bg-cyan-100 text-cyan-700 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-cyan-200 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-cyan-500 bg-cyan-200 text-cyan-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-cyan-300 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-cyan-600 bg-cyan-300 text-cyan-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-cyan-400 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-cyan-400 bg-cyan-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-cyan-500 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-cyan-500 bg-cyan-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-cyan-600 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-cyan-600 bg-cyan-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-cyan-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-cyan-700 bg-cyan-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-cyan-800 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-cyan-800 bg-cyan-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-cyan-900 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-cyan-900 bg-cyan-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-cyan-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
            </div>
            <h3 className="text-2xl capitalize font-medium py-5">
              teal Buttons
            </h3>
            <div className="w-full text-center mx-auto">
              <button
                type="button"
                className="border border-teal-400 bg-teal-100 text-teal-700 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-teal-200 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-teal-500 bg-teal-200 text-teal-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-teal-300 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-teal-600 bg-teal-300 text-teal-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-teal-400 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-teal-400 bg-teal-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-teal-500 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-teal-600 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-teal-600 bg-teal-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-teal-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-teal-700 bg-teal-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-teal-800 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-teal-800 bg-teal-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-teal-900 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-teal-900 bg-teal-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-teal-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
            </div>
            <h3 className="text-2xl capitalize font-medium py-5">
              blue Buttons
            </h3>
            <div className="w-full text-center mx-auto">
              <button
                type="button"
                className="border border-blue-400 bg-blue-100 text-blue-700 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-blue-200 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-blue-500 bg-blue-200 text-blue-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-blue-300 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-blue-600 bg-blue-300 text-blue-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-blue-400 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-blue-400 bg-blue-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-blue-500 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-blue-600 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-blue-600 bg-blue-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-blue-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-blue-700 bg-blue-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-blue-800 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-blue-800 bg-blue-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-blue-900 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-blue-900 bg-blue-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-blue-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
            </div>
            <h3 className="text-2xl capitalize font-medium py-5">
              lightBlue Buttons
            </h3>
            <div className="w-full text-center mx-auto">
              <button
                type="button"
                className="border border-lightBlue-400 bg-lightBlue-100 text-lightBlue-700 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-lightBlue-200 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-lightBlue-500 bg-lightBlue-200 text-lightBlue-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-lightBlue-300 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-lightBlue-600 bg-lightBlue-300 text-lightBlue-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-lightBlue-400 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-lightBlue-400 bg-lightBlue-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-lightBlue-500 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-lightBlue-500 bg-lightBlue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-lightBlue-600 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-lightBlue-600 bg-lightBlue-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-lightBlue-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-lightBlue-700 bg-lightBlue-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-lightBlue-800 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-lightBlue-800 bg-lightBlue-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-lightBlue-900 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-lightBlue-900 bg-lightBlue-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-lightBlue-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
            </div>
            <h3 className="text-2xl capitalize font-medium py-5">
              blueGray Buttons
            </h3>
            <div className="w-full text-center mx-auto">
              <button
                type="button"
                className="border border-blueGray-400 bg-blueGray-100 text-blueGray-700 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-blueGray-200 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-blueGray-500 bg-blueGray-200 text-blueGray-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-blueGray-300 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-blueGray-600 bg-blueGray-300 text-blueGray-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-blueGray-400 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-blueGray-400 bg-blueGray-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-blueGray-500 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-blueGray-500 bg-blueGray-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-blueGray-600 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-blueGray-600 bg-blueGray-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-blueGray-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-blueGray-700 bg-blueGray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-blueGray-800 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-blueGray-800 bg-blueGray-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-blueGray-900 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-blueGray-900 bg-blueGray-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-blueGray-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
            </div>
            <h3 className="text-2xl capitalize font-medium py-5">
              indigo Buttons
            </h3>
            <div className="w-full text-center mx-auto">
              <button
                type="button"
                className="border border-indigo-400 bg-indigo-100 text-indigo-700 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-indigo-200 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-indigo-500 bg-indigo-200 text-indigo-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-indigo-300 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-indigo-600 bg-indigo-300 text-indigo-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-indigo-400 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-indigo-400 bg-indigo-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-indigo-500 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-indigo-600 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-indigo-600 bg-indigo-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-indigo-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-indigo-700 bg-indigo-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-indigo-800 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-indigo-800 bg-indigo-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-indigo-900 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-indigo-900 bg-indigo-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-indigo-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
            </div>
            <h3 className="text-2xl capitalize font-medium py-5">
              purple Buttons
            </h3>
            <div className="w-full text-center mx-auto">
              <button
                type="button"
                className="border border-purple-400 bg-purple-100 text-purple-700 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-purple-200 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-purple-500 bg-purple-200 text-purple-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-purple-300 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-purple-600 bg-purple-300 text-purple-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-purple-400 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-purple-400 bg-purple-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-purple-500 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-purple-500 bg-purple-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-purple-600 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-purple-600 bg-purple-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-purple-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-purple-700 bg-purple-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-purple-800 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-purple-800 bg-purple-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-purple-900 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-purple-900 bg-purple-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-purple-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
            </div>
            <h3 className="text-2xl capitalize font-medium py-5">
              pink Buttons
            </h3>
            <div className="w-full text-center mx-auto">
              <button
                type="button"
                className="border border-pink-400 bg-pink-100 text-pink-700 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-pink-200 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-pink-500 bg-pink-200 text-pink-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-pink-300 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-pink-600 bg-pink-300 text-pink-800 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-pink-400 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-pink-400 bg-pink-400 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-pink-500 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-pink-500 bg-pink-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-pink-600 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-pink-600 bg-pink-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-pink-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-pink-700 bg-pink-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-pink-800 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-pink-800 bg-pink-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-pink-900 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
              <button
                type="button"
                className="border border-pink-900 bg-pink-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-pink-700 select-none focus:ring-1 focus:ring-gray-100"
              >
                Buttons
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Buttons
