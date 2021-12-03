import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AboutScreem } from './AboutScreem';
import { HomeScreem } from './HomeScreem';
import { LoginScreem } from './LoginScreem';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <div className="container">

                    <Switch>
                        {/* exact={ true } para que la URL sea exacta, tambien se puede colocar exact sin = { true } */}
                        <Route exact={ true } path="/about" component={AboutScreem} />
                        <Route exact={ true } path="/login" component={LoginScreem} />
                        <Route exact={ true } path="/" component={HomeScreem} />
                        <Redirect to="/" />  {/* Ruta por defecto, notar que no tiene la palabre exact */}
                    </Switch>

                </div>
            </div>
        </Router>
    )
}
