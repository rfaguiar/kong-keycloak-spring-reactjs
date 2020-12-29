import React from "react";
import {Redirect, Route, RouteProps} from 'react-router-dom';
import {keycloakConfig} from "../../keycloak";

interface PrivateRouteProps extends RouteProps{

}

export const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
    const {component, ...other} = props;
    const Component: any = component;
    return (
        <div>
            <Route {...other} render={props => {
                if (keycloakConfig.authenticated) {
                    return <Component {...props}/>
                }
                return <Redirect to={{
                    pathname: "/login",
                    state: {from: props.location}
                }} />
            }}/>
        </div>
    );
}