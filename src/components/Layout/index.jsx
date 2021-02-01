import { graphql, useStaticQuery } from "gatsby"
import Prism from "prismjs"
import React, { useEffect } from "react"
import Container from "../Container"
import Footer from "../Footer"
import TopBar from "../TopBar"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
        <TopBar
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        />
        <div className="max-w-6xl mt-0 mb-auto mx-auto pt-0 pb-5 px-4">
          <main>
            <Container>{children}</Container>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout