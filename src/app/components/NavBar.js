import { Link, navigate } from "gatsby"
import React from "react"
import { useIdentityContext } from "react-netlify-identity-widget"
import Status from "../../components/Status"

export default () => {
  const { user, isLoggedIn, logoutUser } = useIdentityContext()
  let message = isLoggedIn
    ? `Hello, ${user.user_metadata && user.user_metadata.full_name}`
    : "You are not logged in"

  return (
    <>
      <div className="flex flex-1 justify-between border-b-1 border-pink-200 bg-blue-200 bg-opacity-30 p-4 mb-4">
        <span>{message}</span>

        <nav>
          <span>Navigate the app: </span>
          <Link to="/app/">Main</Link>
          {` `}
          <Link to="/app/profile">Profile</Link>
          {` `}
          {isLoggedIn ? (
            <a
              className="btn"
              href="/"
              onClick={async event => {
                event.preventDefault()
                await logoutUser()
                navigate(`/app/login`)
              }}
            >
              Logout
            </a>
          ) : (
            <Link to="/app/login">Login</Link>
          )}
        </nav>
      </div>
      <Status />
    </>
  )
}
