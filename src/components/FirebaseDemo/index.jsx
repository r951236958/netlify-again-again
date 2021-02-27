import React, { useState, useEffect } from 'react'
// import firebase from "gatsby-plugin-firebase"
import GoogleButton from 'react-google-button'
import { signInWithGoogle } from '../../utils/auth'
import firebase from 'firebase/app'
// import { navigate } from 'gatsby'
// import { logout, isLoggedIn, getUser } from '../../utils/auth'

// import Button from "@material-ui/core/Button"
// import TextField from "@material-ui/core/TextField"

export default function FirebaseDemo() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const { displayName, email, photoUrl } = user
        setUser({
          displayName,
          email,
          photoUrl,
        })
      }
    })
  }, [user])

  return (
    <div>
      <GoogleButton onClick={signInWithGoogle}>
        Sign In With Google
      </GoogleButton>
    </div>
  )
}
