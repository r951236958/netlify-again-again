import firebase from 'gatsby-plugin-firebase'

export const auth = firebase.auth()

const googleProvider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then(res => {
      console.log(res.user)
    })
    .catch(error => {
      console.log(error.message)
    })
}

// export const logOut = () => {
//   auth
//     .signOut()
//     .then(() => {
//       console.log("logged out")
//     })
//     .catch(error => {
//       console.log(error.message)
//     })
// }

// var provider = new firebase.auth.GoogleAuthProvider()

// export const login = () => {
//   return new Promise((resolve, reject) => {
//     auth.signInWithPopup(provider).then(function(result) {
//       var token = result.credential.accessToken
//       var user = result.user
//       resolve({
//         token: token,
//         user: user,
//       })
//     })
//   })
// }

// export const logout = () => {
//   return new Promise(resolve => {
//     auth.signOut().then(() => {
//       setUser({})
//       resolve()
//       console.log('Successfully Logged Out')
//     })
//   })
// }
