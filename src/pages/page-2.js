import { Link } from "gatsby"
import React from "react"
import { FontIcon } from "@react-md/icon"
import Layout from "../components/Layout"
import P from "../components/P"
import SEO from "../components/SEO"
import Title from "../components/Title"

import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt"
import { FaPlus } from "@react-icons/all-files/fa/FaPlus"
import { BsTrash } from "@react-icons/all-files/bs/BsTrash"
import { BsPlus } from "@react-icons/all-files/bs/BsPlus"
import { BiEdit } from "@react-icons/all-files/bi/BiEdit"

const SecondPage = () => {
  const siteTitle = "Page two"

  return (
    <Layout>
      <SEO title={siteTitle} />
      <Title>{siteTitle}</Title>
      <P>Welcome to page 2</P>
      <Link className="btn" to="/">
        Go back to the homepage
      </Link>
      <div className="flex flex-wrap p-4">
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 bg-gray-600 text-gray-100 border-gray-600 hover:bg-gray-700 hover:border-gray-700 hover:text-white h-10 px-6">
          <span className="capitalize">gray</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 bg-yellow-600 text-yellow-100 border-yellow-600 hover:bg-yellow-700 hover:border-yellow-700 hover:text-white h-10 px-6">
          <span className="capitalize">yellow</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 bg-orange-600 text-orange-100 border-orange-600 hover:bg-orange-700 hover:border-orange-700 hover:text-white h-10 px-6">
          <span className="capitalize">orange</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 bg-red-600 text-red-100 border-red-600 hover:bg-red-700 hover:border-red-700 hover:text-white h-10 px-6">
          <span className="capitalize">red</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 bg-green-600 text-green-100 border-green-600 hover:bg-green-700 hover:border-green-700 hover:text-white h-10 px-6">
          <span className="capitalize">green</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 bg-teal-600 text-teal-100 border-teal-600 hover:bg-teal-700 hover:border-teal-700 hover:text-white h-10 px-6">
          <span className="capitalize">teal</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 bg-blue-600 text-blue-100 border-blue-600 hover:bg-blue-700 hover:border-blue-700 hover:text-white h-10 px-6">
          <span className="capitalize">blue</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 bg-indigo-600 text-indigo-100 border-indigo-600 hover:bg-indigo-700 hover:border-indigo-700 hover:text-white h-10 px-6">
          <span className="capitalize">indigo</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 bg-purple-600 text-purple-100 border-purple-600 hover:bg-purple-700 hover:border-purple-700 hover:text-white h-10 px-6">
          <span className="capitalize">purple</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 bg-pink-600 text-pink-100 border-pink-600 hover:bg-pink-700 hover:border-pink-700 hover:text-white h-10 px-6">
          <span className="capitalize">pink</span>
        </button>
      </div>
      <div className="flex flex-wrap p-4">
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:bg-opacity-20 hover:border-gray-600 hover:text-white h-10 px-6">
          <span className="capitalize">gray</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:bg-opacity-20 hover:border-yellow-600 hover:text-white h-10 px-6">
          <span className="capitalize">yellow</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:bg-opacity-20 hover:border-orange-600 hover:text-white h-10 px-6">
          <span className="capitalize">orange</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 border-red-600 text-red-600 hover:bg-red-600 hover:bg-opacity-20 hover:border-red-600 hover:text-white h-10 px-6">
          <span className="capitalize">red</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 border-green-600 text-green-600 hover:bg-green-600 hover:bg-opacity-20 hover:border-green-600 hover:text-white h-10 px-6">
          <span className="capitalize">green</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:bg-opacity-20 hover:border-teal-600 hover:text-white h-10 px-6">
          <span className="capitalize">teal</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:bg-opacity-20 hover:border-blue-600 hover:text-white h-10 px-6">
          <span className="capitalize">blue</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:bg-opacity-20 hover:border-indigo-600 hover:text-white h-10 px-6">
          <span className="capitalize">indigo</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:bg-opacity-20 hover:border-purple-600 hover:text-white h-10 px-6">
          <span className="capitalize">purple</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:bg-opacity-20 hover:border-pink-600 hover:text-white h-10 px-6">
          <span className="capitalize">pink</span>
        </button>
      </div>
      <div className="flex items-end p-4">
        <div>
          <button className=" leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 bg-teal-600 text-teal-100 border-teal-600 hover:bg-teal-700 hover:border-teal-700 hover:text-white h-12 text-lg px-12">
            <span className="capitalize">lg</span>
          </button>
        </div>
        <div>
          <button className=" leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 bg-teal-600 text-teal-100 border-teal-600 hover:bg-teal-700 hover:border-teal-700 hover:text-white h-10 px-6">
            <span className="capitalize">md</span>
          </button>
        </div>
        <div>
          <button className=" leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 bg-teal-600 text-teal-100 border-teal-600 hover:bg-teal-700 hover:border-teal-700 hover:text-white h-8 text-sm px-4">
            <span className="capitalize">sm</span>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-end p-4">
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 bg-teal-600 text-teal-100 border-teal-600 hover:bg-teal-700 hover:border-teal-700 hover:text-white h-10 px-6">
          <BiEdit className="mr-1" />
          <span>Edit</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 bg-teal-600 text-teal-100 border-teal-600 hover:bg-teal-700 hover:border-teal-700 hover:text-white h-10 px-3">
          <FontIcon>edit</FontIcon>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 border-red-600 text-red-600 hover:bg-red-600 hover:bg-opacity-20 hover:border-red-600 hover:text-white h-8 text-sm px-2">
          <FaRegTrashAlt />
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 border-red-600 text-red-600 hover:bg-red-600 hover:bg-opacity-20 hover:border-red-600 hover:text-white h-10 px-3">
          <FontIcon>delete_forever</FontIcon>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 border-red-600 text-red-600 hover:bg-red-600 hover:bg-opacity-20 hover:border-red-600 hover:text-white h-12 text-lg px-4">
          <BsTrash />
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline mx-2 mb-2 border-green-600 text-green-600 hover:bg-green-600 hover:bg-opacity-20 hover:border-green-600 hover:text-white p-2 rounded-full">
          <FontIcon>add</FontIcon>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline mx-2 mb-2 border-green-600 text-green-600 hover:bg-green-600 hover:bg-opacity-20 hover:border-green-600 hover:text-white h-10 p-3 rounded-full">
          <BsPlus />
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline mx-2 mb-2 border-green-600 text-green-600 hover:bg-green-600 hover:bg-opacity-20 hover:border-green-600 hover:text-white h-12 w-12 text-lg p-4 rounded-full">
          <FaPlus />
        </button>
      </div>
    </Layout>
  )
}

export default SecondPage
