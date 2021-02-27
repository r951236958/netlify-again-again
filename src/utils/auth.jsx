import firebase from 'firebase/app'
import 'firebase/auth'
// import config from 'gatsby-plugin-firebase'

// export const auth = firebase.auth()

const googleProvider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = () => {
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(res => {
      console.log(res.user)
    })
    .catch(error => {
      console.log(error.message)
    })
}

export const isBrowser = () => typeof window !== 'undefined'

export const getUser = () =>
  isBrowser() && window.localStorage.getItem('user')
    ? JSON.parse(window.localStorage.getItem('user'))
    : {}

export const setUser = user =>
  isBrowser() && window.localStorage.setItem('user', JSON.stringify(user))

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.email
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = firebase => {
  return new Promise(resolve => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log('logged out')
        setUser({})
        resolve()
        //  callback()
      })
  })
}
