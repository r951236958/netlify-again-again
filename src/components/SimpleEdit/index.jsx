import React, { useState } from 'react'
import EdiText from 'react-editext'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  .container {
    padding: 2px;
  }
`

const CustomEdiText = styled(EdiText)`
  input {
    background: transparent;
  }

  div[editext='edit-container'] {
    height: 4rem;
    padding: 2rem 1rem;
    margin: 1rem;
  }
`

const StyledEdiText = styled(EdiText)`
  button {
    border-radius: 5px;
  }
  button[editext='edit-button'] {
    color: #000;
    width: 50px;
  }
  button[editext='save-button'] {
    width: 50px;
    &:hover {
      background: greenyellow;
    }
  }
  button[editext='cancel-button'] {
    &:hover {
      background: crimson;
      color: #fff;
    }
  }
  input,
  textarea {
    background: #1d2225;
    color: #f4c361;
    font-weight: bold;
    border-radius: 5px;
  }
  div[editext='view-container'],
  div[editext='edit-container'] {
    background: #6293c3;
    padding: 15px;
    border-radius: 5px;
    color: #fff;
  }
`

const SimpleEdit = () => {
  const [value, setValue] = useState('What is real? How do you define real?')

  const handleSave = val => {
    console.log('Edited Value -> ', val)
    setValue(val)
  }

  return (
    <StyledWrapper>
      <CustomEdiText type="text" value={value} onSave={handleSave} />
      <StyledEdiText
        type="text"
        value="The honor is still mine."
        onSave={handleSave}
      />
    </StyledWrapper>
  )
}

export default SimpleEdit
