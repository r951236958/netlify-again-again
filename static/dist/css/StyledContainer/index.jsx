import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.div`
  width: 50%;
  font-size: 1.25rem;
`

const InputBox = styled.div`
  position: relative;
`

const InputBody = styled.input.attrs(props => ({
  className: 'w-full bg-transparent outline-none',
  id: props.id,
  name: props.name,
  type: props.type,
  placeholder: props.placeholder,
}))`
  height: 50px;
`

const InputLabel = styled.label.attrs(props => ({
  className: 'absolute pointer-events-none block',
  label: props.label,
}))`
  transform-origin: top left;
  transform: translate(0, -40px) scale(1);
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  &:focus ~ &:after {
    transform: scaleX(1);
  }
`

const InputUnderline = styled.div.attrs({
  className: 'border-b-2 border-gray-500',
})`
  &:after {
    position: absolute;
    left: 0;
    right: 0;
    pointer-events: none;
    bottom: -0.05rem;
    content: '';
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    transform: scaleX(0);
    border-bottom: 2px solid #805ad5;
  }

  &:focus + label {
    color: #3182ce;
    transform-origin: top left;
    transform: translate(0, -65px) scale(0.75);
  }
`

export const StyledContainer = () => {
  return (
    <>
      <StyledInput>
        <InputBox>
          <InputBody
            id="style-input-test"
            name="style-input-nam"
            type="text"
            placeholder="hi"
          />
          <InputLabel htmlFor="style-input-test">Label</InputLabel>
          <InputUnderline />
        </InputBox>
      </StyledInput>
      {/* <div className="md-input-main">
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
      </div> */}
    </>
  )
}

export default StyledContainer
