import React from "react"
import LinkList from "../components/LinkList"
import Layout from "../components/Layout"
import P from "../components/P"
import SEO from "../components/SEO"
import Title from "../components/Title"

const Links = () => {
  const siteTitle = "My Links"

  return (
    <Layout>
      <SEO title={siteTitle} />
      <Title>Useful Links</Title>
      <P>hi</P>
      <LinkList />
    </Layout>
  )
}

export default Links
