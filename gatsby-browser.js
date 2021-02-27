import 'prismjs/themes/prism-okaidia.css'
import React from 'react'
import { IdentityContextProvider } from 'react-netlify-identity'
import 'react-toastify/dist/ReactToastify.css'
// import './src/styles/index.css'
import './src/styles/global.scss'
import './static/dist/css/tailwind.css'
import '@reach/dialog/styles.css'
import 'firebaseui/dist/firebaseui.css'

export const wrapPageElement = ({ element }) => {
  const url = 'https://gatsby-netlify.mechnick.com/'

  return <IdentityContextProvider url={url}>{element}</IdentityContextProvider>
}
