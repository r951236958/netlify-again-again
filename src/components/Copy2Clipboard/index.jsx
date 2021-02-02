import React, { useState, useEffect, useRef } from "react"
// import { Button } from "gatsby-theme-material-ui"
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn"
import { Button } from "@react-md/button"
import { FontIcon } from "@react-md/icon"
import { TextArea } from "@react-md/form"
// import { CopyToClipboard } from "react-copy-to-clipboard"
import P from "../P"

const Copy2Clipboard = () => {
  // const [state, setState] = useState({ copied: false })
  const [value, setValue] = useState("")
  const [copySuccess, setCopySuccess] = useState("")
  const [isCopied, setIsCopied] = useState("")
  const textAreaRef = useRef(null)

  function CopiedText(e) {
    textAreaRef.current.select()
    document.execCommand("copy")
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus()
    setIsCopied("Copied!")
  }

  const handleChange = event => {
    setValue(event.target.value)
  }

  // your function to copy here
  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe)
      setCopySuccess("Copied!")
    } catch (err) {
      setCopySuccess("Failed to copy!")
    }
  }

  useEffect(() => {
    if (copySuccess !== "") {
      setTimeout(() => {
        setCopySuccess("")
      }, 3000)
    }

    if (typeof document !== "undefined") {
      setIsCopied(document.queryCommandSupported("copy"))
    }
  }, [copySuccess])

  return (
    <div>
      <div className="inline-flex items-center mb-4">
        <span>Click Button to Copy!</span>
        <Button
          theme="secondary"
          buttonType="icon"
          aria-label="copy-text"
          onClick={() => copyToClipBoard("some text to copy")}
        >
          {copySuccess ? (
            <AssignmentTurnedInIcon />
          ) : (
            <FontIcon>content_paste</FontIcon>
          )}
        </Button>
        {/* after copying see the message here */}
        <span className="text-xl font-bold text-red-500">{copySuccess}</span>
      </div>
      <div>
        <TextArea
          id="copytext-02"
          ref={textAreaRef}
          value="Target to copied!"
        />

        {isCopied && (
          <>
            <button
              className="text-teal-500 hover:text-teal-400 border border-teal-500 hover:border-teal-400 rounded-md bg-transparent hover:bg-gray-800 hover:bg-opacity-20 px-3 py-2 mx-2 mb-2"
              onClick={CopiedText}
            >
              Copy
            </button>
            <P>{setIsCopied}</P>
          </>
        )}
      </div>
      <span>text: {value}</span>
      <TextArea id="copy-on-change" value={value} onChange={handleChange} />

      {!isCopied ? <span style={{ color: "red" }}>Copied.</span> : null}
    </div>
  )
}

export default Copy2Clipboard
