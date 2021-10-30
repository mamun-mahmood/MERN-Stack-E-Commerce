import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../AuthContext';


function PrivateRouteSeller({ children, ...rest }) {
    let {currentUser} = useAuth();
    if(currentUser&& currentUser.email !== "marikadevan@gmail.com"){
        currentUser = null;
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
            currentUser ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/seller_signIn",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRouteSeller;