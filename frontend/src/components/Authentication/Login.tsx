import React from "react";
import {useKeycloak} from "@react-keycloak/web";
import {Redirect, useLocation } from "react-router-dom";

type Props = {

}

export const Login = (props: Props) => {
    const {keycloak} = useKeycloak();
    const location = useLocation();

    // @ts-ignore
    const {from} = location.state || {from: {pathname: '/'}}
    if (keycloak?.authenticated) {
        return <Redirect to={from} />
    }
    keycloak?.login();
    return <div>Initializing....</div>;
}