import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const SecondPage = () => {
  const siteTitle = "Page two"
  
  return (
       <Layout>
         <SEO title={siteTitle} />
         <h1>Hi from the second page</h1>
         <p>Welcome to page 2</p>
         <Link to="/">Go back to the homepage</Link>
       </Layout>
     )}
                               
export default SecondPage
