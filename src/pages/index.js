import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Index = () => {
  const title = "Home"
  return (
    <Layout siteTitle={title}>
      <SEO title={title} />
    </Layout>
  )
}

export default Index
