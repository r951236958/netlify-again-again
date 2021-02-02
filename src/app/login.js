import { navigate } from "gatsby"
import React from "react"
import { IdentityModal } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS
import Title from "../components/Title"

function Login() {
  const [dialog, setDialog] = React.useState(false)
  return (
    <>
      <Title>Log in</Title>
      <button className="btn" onClick={() => setDialog(true)}>
        log in
      </button>

      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={user => navigate("/app/profile")}
        onSignup={user => navigate("/app/profile")}
      />
    </>
  )
}

export default Login
