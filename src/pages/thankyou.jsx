import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Title from "../components/Title"

const ThanksPage = () => {
  const siteTitle = "Thank You!!"
  return (
    <Layout>
      <SEO title={siteTitle} />
      <Title>{siteTitle}</Title>
    </Layout>
  )
}

export default ThanksPage
