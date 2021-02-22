import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import P from "../components/P"
import SEO from "../components/SEO"

const SecondPage = () => {
  const title = "Page two"

  return (
    <Layout siteTitle={title}>
      <SEO title={title} />

      <P>Welcome to page 2</P>
      <Link className="btn" to="/">
        Go back to the homepage
      </Link>
    </Layout>
  )
}

export default SecondPage
