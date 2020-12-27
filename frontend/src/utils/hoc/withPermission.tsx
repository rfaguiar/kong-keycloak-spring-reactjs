import React from "react";
import {Redirect} from "react-router-dom";

type Role = 'admin' | 'customer' | undefined

const withPermission = ( roles: Role[], redirect = '') => 
    (Component: React.FC<any>) => 
        (props: any) => {
            if (roles.includes('admin')) {
                return <Component {...props}/>
            } else if (redirect) {
                return <Redirect to={redirect}/>
            }
            return null          
}

export default withPermission
