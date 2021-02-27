import React from 'react'
// import { logOut } from "../firebase"
import { getUser, logout } from '../utils/auth'
import firebase from 'gatsby-plugin-firebase'
import Button from '@material-ui/core/Button'
// import { useIdentityContext } from "react-netlify-identity-widget"
import { navigate } from 'gatsby'

const Profile = () => {
  // const { user } = useIdentityContext()
  const user = getUser()
  const { displayName, email, photoURL } = user
  // const accessToken = user.stsTokenManager.accessToken

  const handleLogOut = event => {
    event.preventDefault()
    logout(firebase).then(() => navigate(`/app/login`))
  }
  return (
    <>
      <h1>Your profile</h1>
      <ul>
        <li>Name: {displayName}</li>
        <li>E-mail: {email}</li>
        <li>Photo Url: {photoURL}</li>
      </ul>
      <Button variant="contained" onClick={handleLogOut} color="primary">
        Log Out
      </Button>
    </>
  )
}

export default Profile
