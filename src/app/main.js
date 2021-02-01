import React from "react"

import { useIdentityContext } from "react-netlify-identity-widget"
import Title from "../components/Title"
import P from "../components/P"

function Main() {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const { user } = useIdentityContext()
  const [err, setErr] = React.useState("")

  const handleClick = e => {
    e.preventDefault()
    setLoading(true)
    fetch("/.netlify/functions/auth-hello", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.token.access_token,
      },
    })
      .then(response => response.json())
      .then(json => {
        setLoading(false)
        setData(json)
      })
      .catch(err => {
        if (window.location.origin === "http://localhost:8000")
          setErr(
            'your origin is "http://localhost:8000". You are likely not using Netlify Dev so the functions server isnt running. Please read the docs, use Netlify Dev, and go to http://localhost:8888'
          )
        else setErr(err)
        throw err
      })
  }

  return (
    <>
      <Title>Your Main App</Title>
      <ul>
        <li>
          <P>API: {user.api && user.api.apiURL}</P>
        </li>
        <li>
          <P>ID: {user.id}</P>
        </li>
      </ul>
      <hr />

      <button className="btn" onClick={handleClick}>
        {loading ? "Loading..." : "Call Lambda Function"}
      </button>
      {err && (
        <pre className="language-json">
          <code>{JSON.stringify(err, null, 2)}</code>
        </pre>
      )}
      <pre className="language-json">
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </>
  )
}

export default Main
