import React from 'react';
import './App.css';
import ProductsView from "../views/ProductsView";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import NotFoundView from "../views/NotFoundView";
import {useKeycloak} from "@react-keycloak/web";
import {Login} from "../Authentication/Login";
import {PrivateRoute} from "../../utils/hoc/PrivateRoute";

function App() {
    const { initialized } = useKeycloak();

    if (!initialized) {
        return <div>Initializing....</div>
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path={"/login"} exact component={Login} />
                    <PrivateRoute path={"/"} exact>
                        <Redirect to={"/products"}/>
                    </PrivateRoute>
                    <PrivateRoute path={"/products/:id?"} exact component={ProductsView} />
                    <Route component={NotFoundView} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
