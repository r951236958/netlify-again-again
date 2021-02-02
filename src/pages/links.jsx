import React from "react"
import Layout from "../components/Layout"
import LinkList from "../components/LinkList"
import Copy2Clipboard from "../components/Copy2Clipboard"
import P from "../components/P"
import SEO from "../components/SEO"
import Title from "../components/Title"

const Links = () => {
  const siteTitle = "My Links"

  return (
    <Layout>
      <SEO title={siteTitle} />
      <Title>{siteTitle}</Title>
      <P>hi</P>
      <Copy2Clipboard />
      <LinkList />
    </Layout>
  )
}

export default Links
