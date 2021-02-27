import { navigate } from 'gatsby'
import React, { useState, useEffect } from 'react'
// import { IdentityModal } from "react-netlify-identity-widget"
// import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS
import Title from '../components/Title'
import GoogleButton from 'react-google-button'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { setUser, isLoggedIn, signInWithGoogle } from '../utils/auth'
import firebase from 'gatsby-plugin-firebase'
// import Button from '@material-ui/core/Button'

function Login() {
  const [isSignedIn, setSignedIn] = useState(undefined)

  // const user = getUser()
  if (isLoggedIn()) {
    navigate(`/app/profile`)
  }

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        if (authResult.user) {
          setUser(authResult.user)
        }
        // if (authResult.additionalUserInfo) {
        //   document.getElementById('is-new-user').textContent = authResult
        //     .additionalUserInfo.isNewUser
        //     ? 'New User'
        //     : 'Existing User'
        // }
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true
      },
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInSuccessUrl: '/app/profile/',
    // Terms of service url.
    tosUrl: 'https://www.google.com',
    // Privacy policy url.
    privacyPolicyUrl: 'https://www.google.com',
  }

  // const firebeseUiAuth = () => {
  //   return {
  //     signInOptions: [
  //       {
  //         provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //         scopes: ['https://www.googleapis.com/auth/contacts.readonly'],
  //         customParameters: {
  //           // Forces account selection even when one account
  //           // is available.
  //           prompt: 'select_account',
  //         },
  //       },
  //       {
  //         provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //         scopes: ['public_profile', 'email', 'user_likes', 'user_friends'],
  //         customParameters: {
  //           // Forces password re-entry.
  //           auth_type: 'reauthenticate',
  //         },
  //       },
  //       firebase.auth.TwitterAuthProvider.PROVIDER_ID, // Twitter does not support scopes.
  //       firebase.auth.EmailAuthProvider.PROVIDER_ID, // Other providers don't need to be given as object.
  //     ],
  //   }
  // }

  const getUiConfig = auth => {
    return {
      signInFlow: 'popup',
      signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        auth.EmailAuthProvider.PROVIDER_ID,
        auth.FacebookAuthProvider.PROVIDER_ID,
        auth.TwitterAuthProvider.PROVIDER_ID,
        auth.GithubAuthProvider.PROVIDER_ID,
      ],
      // signInSuccessUrl: '/app/profile',
      callbacks: {
        signInSuccessWithAuthResult: result => {
          setUser(result.user)
          navigate('/app/profile')
        },
      },
    }
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setSignedIn({ isSignedIn: !!user })
    })
  }, [isSignedIn])

  return (
    <>
      <Title>Welcome to My Awesome App</Title>
      <div>
        <h4>Login</h4>
        {isSignedIn !== undefined && (
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
      <div>
        {firebase && (
          <div className="my-4">
            <GoogleButton onClick={signInWithGoogle}>
              Sign In With Google
            </GoogleButton>
            <div id="loader" />
            <StyledFirebaseAuth
              uiConfig={getUiConfig(firebase.auth)}
              firebaseAuth={firebase.auth()}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default Login
