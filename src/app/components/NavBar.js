import { Link, navigate } from 'gatsby'
import React from 'react'
// import { useIdentityContext } from "react-netlify-identity-widget"
import Status from '../../components/Status'
import { logout, isLoggedIn } from '../../utils/auth'
import firebase from 'gatsby-plugin-firebase'

const NavBar = () => {
  // const { isLoggedIn, logoutUser } = useIdentityContext()
  // let message = isLoggedIn
  // ? `Hello, ${user.user_metadata && user.user_metadata.full_name}`
  // : "You are not logged in"

  return (
    <>
      <div className="flex flex-1 justify-end border-b-1 border-pink-200 bg-blue-200 bg-opacity-30 p-4 mb-4">
        <nav>
          <Link
            className="text-gray-300 hover:bg-gray-700 hover:text-white active:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            to="/app/"
          >
            Main
          </Link>

          <Link
            className="text-gray-300 hover:bg-gray-700 hover:text-white active:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            to="/app/profile"
          >
            Profile
          </Link>

          {isLoggedIn() ? (
            <button
              className="text-gray-300 hover:bg-gray-700 hover:text-white active:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              onClick={async event => {
                event.preventDefault()
                await logout(firebase).then(() => navigate(`/app/login`))
              }}
            >
              Logout
            </button>
          ) : (
            <Link
              className="text-gray-300 hover:bg-gray-700 hover:text-white active:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              to="/app/login"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
      <Status />
    </>
  )
}

export default NavBar
