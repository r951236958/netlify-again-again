import { Link } from "gatsby"
import React from "react"
import Hr from "../components/Hr"
import Image from "../components/image"
import Layout from "../components/Layout"
import P from "../components/P"
import SEO from "../components/SEO"


class IndexPage extends React.Component {
  state = { loading: false, msg: null }
  handleClick = e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/token-hider")
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.message }))
  }

  render() {
    const { loading, msg } = this.state
    const siteTitle = "Home"
    return (
      <Layout>
        <SEO title={siteTitle} keywords={[`gatsby`, `application`, `react`]} />
        <div className="flex flex-col lg:flex-row justify-between divide-x-0 lg:divide-dashed lg:divide-x-2 divide-red-700">
          <div className="mr-0 lg:mr-4">
            <P>
              Welcome to your new Gatsby + Netlify Functions + Netlify Identity
              site
            </P>
            <ul>
              <li>
                <P>
                  This site has statically generated marketing pages like this
                  one and{" "}
                  <Link className="link" to="/page-2/">
                    page 2.
                  </Link>{" "}
                </P>
              </li>
              <li>
                It also has a dynamically generated clientside app guarded by
                authentication:
                <ul>
                  <li>
                    <Link className="link" to="/app/">
                      <b>Go to App (with Netlify Identity)</b>
                    </Link>{" "}
                  </li>
                </ul>
              </li>
              <li>
                You can{" "}
                <a
                  className="link"
                  href="https://github.com/sw-yx/jamstack-hackathon-starter"
                >
                  view source here
                </a>
              </li>
              <li>
                or see{" "}
                <a className="link" href="https://youtu.be/bueXJInQt2c">
                  the Youtube walkthrough
                </a>
              </li>
              <li>
                or
                <a href="https://app.netlify.com/start/deploy?repository=https://github.com/sw-yx/jamstack-hackathon-starter&stack=cms">
                  <img
                    src="https://www.netlify.com/img/deploy/button.svg"
                    alt="Deploy to Netlify"
                  />
                </a>
              </li>
            </ul>
            <Hr />
            <p>
              You can still access Netlify functions even on static "marketing
              pages". This function is available at{" "}
              <a href="/.netlify/functions/token-hider">
                <pre className="bg-yellow-300 bg-opacity-20 px-2 py-1 inline-flex items-center rounded font-bold">
                  /.netlify/functions/token-hider
                </pre>
              </a>{" "}
              and it uses an API_SECRET environment variable that is hidden from
              the frontend!
            </p>
            <button
              className="hover:bg-gray-800 hover:bg-opacity-40 text-gray-300 hover:text-gray-100 border rounded border-gray-300 hover:border-gray-100 px-3 py-2"
              onClick={this.handleClick}
            >
              {loading ? "Loading..." : "Call Lambda Function"}
            </button>
            <br />

            {msg ? (
              <img src={msg[Math.floor(Math.random() * 10)]} alt="dog"></img>
            ) : (
              <pre className="language-html">
                <code>"Click the button and watch this!"</code>
              </pre>
            )}
          </div>

          <div className="lg:pl-12 md:pt-4">
            <p>Now go build something great.</p>
            <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}>
              <Image />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
