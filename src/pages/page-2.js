import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import P from "../components/P"
import SEO from "../components/SEO"
import Title from "../components/Title"

const SecondPage = () => {
  const siteTitle = "Page two"
  
  return (
    <Layout>
      <SEO title={siteTitle} />
      <Title>Hi from the second page</Title>
      <P>Welcome to page 2</P>
      <Link className="btn" to="/">
        Go back to the homepage
      </Link>
    </Layout>
  )}
                               
export default SecondPage
