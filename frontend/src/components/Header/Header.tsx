import React from "react";
import "./Header.css"
import {useHistory} from "react-router-dom";
import Swal from "sweetalert2";

declare interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = (props) => {
    const history = useHistory()
    
    const isLoggedIn = true
    
    const askToLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#09f',
            cancelButtonColor: '#d33',
        })
            .then(({value}) => value)
    }
    
    const handleLoginLogout = () => {
        if (isLoggedIn) {
            askToLogout()
        } else {
            history.push('/login')
        }
    }
    
    return <header className="AppHeader">
            <h1>{ props.title }</h1>
        <div>
            <span onClick={handleLoginLogout}>
                {
                    isLoggedIn ? 'Logout' : 'Login'
                }
            </span>
        </div>
        </header>
}

export default Header;