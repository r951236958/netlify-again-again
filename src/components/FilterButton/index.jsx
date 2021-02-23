// import Button from "@material-ui/core/Button"
import React, { useState } from "react"

function FilterButton(props) {
  const [isActive, setActive] = useState("false")

  const handleToggle = () => {
    props.setFilter(props.name)
    setActive(!isActive)
  }

  return (
    <>
      <button
        className={isActive ? "btn-filter" : "btn-filter-active"}
        aria-pressed={props.isPressed}
        onClick={handleToggle}
      >
        <span>{props.name}</span>
      </button>
    </>
  )
}

export default FilterButton
