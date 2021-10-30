import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../AuthContext';

function PrivateRoute({ children, ...rest }) {
    const {currentUser} = useAuth()
    return (
        <Route
            {...rest}
            render={({ location }) =>
            currentUser ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signInuserPage",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;