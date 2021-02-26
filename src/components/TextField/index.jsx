import React from 'react'

const TextField = ({ props, id, label, name, type, placeholder }) => {
  // const initialState = ''
  // const [values, setValue] = useState(initialState)
  return (
    <div className="md-input-main">
      <div className="md-textfield">
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          {...props}
        />
        <label htmlFor={id}>{label}</label>
        <div className="md-textfield-underline" />
      </div>
    </div>
  )
}

export default TextField
