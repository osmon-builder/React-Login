import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Register} from "../Components/Register";
import { Login } from "../Components/Login";
import { DasboardRoutes } from "./DasboardRoutes";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={ Login }  />
                    <Route exact path="/register" component={Register} />
                    <Route   path="/" component={ DasboardRoutes } />

                </Switch>
            </div>
        </Router>
    );
}

