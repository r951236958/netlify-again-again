import React from "react"
import PropTypes from "prop-types"

const View = ({ title, children }) => {
  return (
    <div className="container w-full md:min-h-full block bg-gray-700 bg-opacity-40 rounded mx-auto pt-6 pb-8 mb-4">
      <div className="w-1/3"></div>
      <div className="bg-gray-100 text-gray-900 shadow-lg rounded px-4 pt-6 pb-8 mb-4 md:mx-24 lg:mx-64">
        <h1 className="text-lg font-bold">{title}</h1>

        <div className="my-8">{children}</div>
      </div>
      <div className="w-1/3"></div>
    </div>
  )
}
View.propTypes = {
  title: PropTypes.string.isRequired,
}

export default View
