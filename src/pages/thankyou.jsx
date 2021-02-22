import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const ThanksPage = () => {
  const title = "Thank You!!"
  return (
    <Layout siteTitle={title}>
      <SEO title={title} />
    </Layout>
  )
}

export default ThanksPage
