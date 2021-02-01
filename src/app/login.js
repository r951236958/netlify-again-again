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
      <div className="block">
        <button className="flex items-start rounded-lg border border-teal-400 px-5 py-4 text-lg leading-6 font-medium text-white hover:bg-gray-800 transition ease-in-out duration-150">
          button
        </button>
      </div>
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
