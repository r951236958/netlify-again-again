// import Tooltip from "@atlaskit/tooltip"
// import { TextArea } from "@react-md/form"
import React, { useRef, useState } from "react"
import Select, { components } from "react-select"
import { toast, ToastContainer } from 'react-toastify'
import CreatableAdvancedSelect from "../components/CreatableAdvancedSelect"
// import Container from "../components/Container"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Input = props => <components.Input {...props} isHidden={false} />

const tableItems = [
  {
    Prefix: "imp→",
    Method: "import moduleName from 'module'",
  },
  {
    Prefix: "imn→",
    Method: "import 'module'",
  },
  {
    Prefix: "exp→",
    Method: "export default moduleName",
  },
  {
    Prefix: "enf→",
    Method: "export const functionName = (params) => { }",
  },
  {
    Prefix: "edf→",
    Method: "export default (params) => { }",
  },
  {
    Prefix: "nfn→",
    Method: "const functionName = (params) => { }",
  },
  {
    Prefix: "imr→",
    Method: "import React from 'react'",
  },
  {
    Prefix: "impt→",
    Method: "import PropTypes from 'prop-types'",
  },
  {
    Prefix: "imrs→",
    Method: "import React, { useState } from 'react'",
  },
  {
    Prefix: "imrse→",
    Method: "import React, { useState, useEffect } from 'react'",
  },
]
export default function HotKey() {
  const siteTitle = "快捷輸入"
  const innerText = ""

  const [value, setValue] = useState()
  const [inputValue, setInputValue] = useState("")
  const [copySuccess, setCopySuccess] = useState(innerText)

  //const handleChange = event => {
  //  setValue(event.target.value)
  //}

  const options = useRef([
    { label: "Editable Options", value: 1 },
    { label: "Black Magic", value: 2 },
    { label: "Very Possible ", value: 3 },
  ]).current

  const selectRef = useRef()

  const onInputChange = (inputValue, { action }) => {
    // onBlur => setInputValue to last selected value
    if (action === "input-blur") {
      setInputValue(value ? value.label : "")
    }

    // onInputChange => update inputValue
    else if (action === "input-change") {
      setInputValue(inputValue)
    }
  }

  const onChange = option => {
    setValue(option)
    setInputValue(option ? option.label : "")
  }

  const onFocus = () => value && selectRef.current.select.inputRef.select()

  function copyToClipboard(e) {
    selectRef.current.select.inputRef.select()
    document.execCommand("copy")
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.

    setCopySuccess("Copied!")

    toast.dark("🦄🦄Copied!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <Layout>
      <SEO title={siteTitle} />
      <ToastContainer />
      <div className="w-2/3 mx-auto">
        <div>
          <div className="text-gray-800">
            <Select
              closeMenuOnSelect={false}
              ref={selectRef}
              options={options}
              isClearable={true}
              value={value}
              inputValue={inputValue}
              onInputChange={onInputChange}
              onChange={onChange}
              onFocus={onFocus}
              controlShouldRenderValue={false}
              components={{
                Input,
              }}
            />
          </div>
          {document.queryCommandSupported("copy") && (
            <div className="tooltip inline-flex items-center">
              <button
                className="text-teal-500 hover:text-teal-400 border border-teal-500 hover:border-teal-400 rounded-md bg-transparent hover:bg-gray-800 hover:bg-opacity-20 px-3 py-2 mx-2 my-2"
                onClick={copyToClipboard}
                disabled={!value}
              >
                <span className="tooltiptext">{copySuccess}</span>
                Copy
              </button>
            </div>
          )}
        </div>

        <div className="text-gray-800 my-4">
          <CreatableAdvancedSelect />
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Prefix
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Method
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {tableItems.map((items, i) => (
                      <tr key={i}>
                        <td className="px-6 py-4 whitespace-nowrap text-md text-gray-500 text-right">
                          {items.Prefix}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-md text-gray-500">
                          {items.Method}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
