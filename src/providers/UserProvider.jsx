import React, { useState, useEffect, createContext } from 'react'
import firebase from 'firebase/app'
// import { auth } from '../utils/auth'

export const UserContext = createContext({ user: null })

export default ({ element }) => {
  const [user, setuser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async user => {
      const { displayName, email } = user
      setuser({
        displayName,
        email,
      })
    })
  }, [])

  return <UserContext.Provider value={user}>{element}</UserContext.Provider>
}
