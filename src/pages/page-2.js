import Icon from "@material-ui/core/Icon"
import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import P from "../components/P"
import SEO from "../components/SEO"
import Title from "../components/Title"

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
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded-md mx-2 mb-2 border-gray-400 text-gray-600 hover:bg-gray-600 hover:bg-opacity-20 hover:border-gray-600 px-4 py-2">
          <span className="capitalize">gray</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded-md mx-2 mb-2 border-yellow-400 text-yellow-600 hover:bg-yellow-600 hover:bg-opacity-20 hover:border-yellow-600 px-4 py-2">
          <span className="capitalize">yellow</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded-md mx-2 mb-2 border-orange-400 text-orange-600 hover:bg-orange-600 hover:bg-opacity-20 hover:border-orange-600 px-4 py-2">
          <span className="capitalize">orange</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded-md mx-2 mb-2 border-red-400 text-red-600 hover:bg-red-600 hover:bg-opacity-20 hover:border-red-600 px-4 py-2">
          <span className="capitalize">red</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded-md mx-2 mb-2 border-green-400 text-green-600 hover:bg-green-600 hover:bg-opacity-20 hover:border-green-600 px-4 py-2">
          <span className="capitalize">green</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded-md mx-2 mb-2 border-teal-400 text-teal-600 hover:bg-teal-600 hover:bg-opacity-20 hover:border-teal-600 px-4 py-2">
          <span className="capitalize">teal</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded-md mx-2 mb-2 border-blue-400 text-blue-600 hover:bg-blue-600 hover:bg-opacity-20 hover:border-blue-600 px-4 py-2">
          <span className="capitalize">blue</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded-md mx-2 mb-2 border-indigo-400 text-indigo-600 hover:bg-indigo-600 hover:bg-opacity-20 hover:border-indigo-600 px-4 py-2">
          <span className="capitalize">indigo</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded-md mx-2 mb-2 border-purple-400 text-purple-600 hover:bg-purple-600 hover:bg-opacity-20 hover:border-purple-600 px-4 py-2">
          <span className="capitalize">purple</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded-md mx-2 mb-2 border-pink-400 text-pink-600 hover:bg-pink-600 hover:bg-opacity-20 hover:border-pink-600 px-4 py-2">
          <span className="capitalize">pink</span>
        </button>
      </div>

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
          <svg
            className="mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            width="24"
            height="24"
          >
            <path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z" />
          </svg>

          <span>Edit</span>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 bg-teal-600 text-teal-100 border-teal-600 hover:bg-teal-700 hover:border-teal-700 hover:text-white h-10 px-3">
          <Icon>edit</Icon>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 border-red-600 text-red-600 hover:bg-red-600 hover:bg-opacity-20 hover:border-red-600 hover:text-white h-8 text-sm px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="24"
            height="24"
          >
            <path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z" />
          </svg>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 border-red-600 text-red-600 hover:bg-red-600 hover:bg-opacity-20 hover:border-red-600 hover:text-white h-10 px-3">
          <Icon>delete_forever</Icon>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline rounded mx-2 mb-2 border-red-600 text-red-600 hover:bg-red-600 hover:bg-opacity-20 hover:border-red-600 hover:text-white h-12 text-lg px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="24"
            height="24"
          >
            <path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z" />
          </svg>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline mx-2 mb-2 border-green-600 text-green-600 hover:bg-green-600 hover:bg-opacity-20 hover:border-green-600 hover:text-white p-2 rounded-full">
          <Icon>add</Icon>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline mx-2 mb-2 border-green-600 text-green-600 hover:bg-green-600 hover:bg-opacity-20 hover:border-green-600 hover:text-white h-10 p-3 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="24"
            height="24"
          >
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
        <button className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline mx-2 mb-2 border-green-600 text-green-600 hover:bg-green-600 hover:bg-opacity-20 hover:border-green-600 hover:text-white h-12 w-12 text-lg p-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="24"
            height="24"
          >
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
      </div>
    </Layout>
  )
}

export default SecondPage
