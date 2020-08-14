import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';




const PrivateRoute = ({ component: Component, roles, ...rest }) => {
    const authReducer = useSelector(state => state.authReducer);
    const { isAuthenticated, userInfo } = authReducer;
    
    return (
        <Route {...rest} render={props => {
            if (!isAuthenticated)
                return <Redirect to={{
                    pathname: '/not-authorized',
                    state: { from: props.location }
                }} />

            if (!roles.includes(userInfo.role))
                return <Redirect to={{
                    pathname: '/not-authorized',
                    state: { from: props.location }
                }} />
            return <Component {...props} />
        }} />
    )
}

export default PrivateRoute;
