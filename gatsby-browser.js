import "prismjs/themes/prism-okaidia.css"
import React from "react"
import { IdentityContextProvider } from "react-netlify-identity"
import "react-toastify/dist/ReactToastify.css"
// import "./src/styles/tailwind.css"
import "./src/styles/global.scss"
import "./src/styles/index.css"
import "./src/styles/layout.css"


export const wrapPageElement = ({ element }) => {
  const url = "https://kind-goldwasser-3e32cf.netlify.app/"

  return <IdentityContextProvider url={url}>{element}</IdentityContextProvider>
}