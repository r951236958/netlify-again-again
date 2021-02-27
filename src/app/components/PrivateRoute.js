import React from 'react'
import { navigate } from 'gatsby'
// import { useIdentityContext } from 'react-netlify-identity-widget'
import { isLoggedIn } from '../../utils/auth'
import PropTypes from 'prop-types'
// import getCookie from 'js-cookie'

// function PrivateRoute(props) {
//   // const { isLoggedIn } = useIdentityContext()
//   const { component: Component, location, ...rest } = props
//
//   React.useEffect(() => {
//     if (!isLoggedIn && location.pathname !== `/app/login`) {
//       // If the user is not logged in, redirect to the login page.
//       navigate(`/app/login`)
//     }
//   }, [])
//   return isLoggedIn ? <Component {...rest} /> : null
// }

const PrivateRoute = props => {
  const { component: Component, location, ...rest } = props

  // useEffect(() => {
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/app/login`)
  }
  // }, [])

  return isLoggedIn ? <Component {...rest} /> : null
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute
