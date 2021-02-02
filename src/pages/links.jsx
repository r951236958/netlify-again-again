import { Button } from "@react-md/button"
import { TextArea } from "@react-md/form"
import React, { useRef, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Layout from "../components/Layout"
import LinkList from "../components/LinkList"
import P from "../components/P"
import SEO from "../components/SEO"
import Title from "../components/Title"

const Links = () => {
  const siteTitle = "My Links"
  const [state, setState] = useState({ copied: false })
  const [value, setValue] = useState("")
  const [copySuccess, setCopySuccess] = useState("")
  const textAreaRef = useRef(null)

  function copyToClipboard(e) {
    textAreaRef.current.select()
    document.execCommand("copy")
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus()
    setCopySuccess("Copied!")
  }

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <Layout>
      <SEO title={siteTitle} />
      <Title>{siteTitle}</Title>
      <P>hi</P>
      <LinkList />
      {document.queryCommandSupported("copy") && (
        <>
          <button
            className="text-teal-500 hover:text-teal-400 border border-teal-500 hover:border-teal-400 rounded-md bg-transparent hover:bg-gray-800 hover:bg-opacity-20 px-3 py-2 mx-2 mb-2"
            onClick={copyToClipboard}
          >
            Copy
          </button>
          <P>{copySuccess}</P>
        </>
      )}
      <TextArea id="copytext-02" ref={textAreaRef} value="Some text to copy" />
      <span>text: {value}</span>
      <TextArea id="copy-on-change" value={value} onChange={handleChange} />
      <CopyToClipboard text={value} onCopy={() => setState({ copied: true })}>
        <Button theme="primary">Copy to clipboard with button</Button>
      </CopyToClipboard>

      {state ? <span style={{ color: "red" }}>Copied.</span> : null}
    </Layout>
  )
}

export default Links
