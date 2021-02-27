import { Router } from "@reach/router"
import React from "react"
import NavBar from "../app/components/NavBar"
import PrivateRoute from "../app/components/PrivateRoute"
import Login from "../app/login"
import Main from "../app/main"
import Profile from "../app/profile"
import Layout from "../components/Layout"
// import AuthProvider from "../providers/AuthProvider"

const App = () => {
  return (
    <Layout>
      <NavBar />
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <PublicRoute path="/app">
          <PrivateRoute path="/" component={Main} />
          <Login path="/login" />
        </PublicRoute>
      </Router>
    </Layout>
  )
}
function PublicRoute(props) {
  return <div>{props.children}</div>
}

export default App

// `src/app` is not "special", it is re-exported by `src/pages/app.js`
// and contains all the clientside dynamic App pages that we dont want to be statically generated.
// `src/pages/app.js` skips the static generation process because of `gatsby-plugin-create-client-paths`
// configured in `gatsby-config.js`
