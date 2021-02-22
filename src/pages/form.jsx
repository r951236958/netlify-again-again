import React from "react"
import GoogleSheets from "../components/GoogleSheets"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Title from "../components/Title"

const Form = () => {
  const siteTitle = "Buttons Example"
  return (
    <Layout>
      <SEO title={siteTitle} />
      <Title>{siteTitle}</Title>
      <GoogleSheets />
    </Layout>
  )
}

export default Form
