import React from 'react';
import './App.css';
import ProductsView from "../views/ProductsView";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import NotFoundView from "../views/NotFoundView";

function App() {        
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path={"/"} exact>
                        <Redirect to={"/products"}/>
                    </Route>
                    <Route path={"/products/:id?"} exact component={ProductsView} />
                    <Route component={NotFoundView} />
                </Switch>
            </BrowserRouter>
                
        </div>
      );
}

export default App;
