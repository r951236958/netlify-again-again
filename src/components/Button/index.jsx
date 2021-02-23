import classnames from "classnames"
import PropTypes from "prop-types"
import React from "react"

function Button({ props, color, children }) {
  return (
    <button
      {...props}
      className={classnames(
        `leading-relaxed font-medium flex items-center cursor-pointer border focus:outline-none rounded-md mx-2 mb-2 border-${color}-600 text-${color}-400 hover:bg-${color}-600 hover:bg-opacity-5 hover:border-${color}-400 px-4 py-2`
      )}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.string,
}

export default Button
