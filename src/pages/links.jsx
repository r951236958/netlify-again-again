import React from "react"
import Layout from "../components/Layout"
import LinkList from "../components/LinkList"
import Copy2Clipboard from "../components/Copy2Clipboard"
import P from "../components/P"
import SEO from "../components/SEO"

const Links = () => {
  const title = "My Links"

  return (
    <Layout siteTitle={title}>
      <SEO title={title} />

      <P>hi</P>
      <Copy2Clipboard />
      <LinkList />
    </Layout>
  )
}

export default Links
