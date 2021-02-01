import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Title from "../components/Title"
import P from "../components/P"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Title>NOT FOUND</Title>
    <P>You just hit a route that doesn&#39;t exist... the sadness.</P>
  </Layout>
)

export default NotFoundPage
