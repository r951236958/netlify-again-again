import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Example = () => {
  const title = "Example Page"
  return (
    <Layout siteTitle={title}>
      <SEO title={title} />
    </Layout>
  )
}

export default Example
