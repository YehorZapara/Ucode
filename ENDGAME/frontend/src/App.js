import React, { useState, useEffect, useContext } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import axios from "axios"
import { LoginPage, GameListPage, Main, RegisterPage } from "./Components";
import { UserContext } from "./context/UserContext";
import "./App.css";



const App = () => {
    axios.defaults.baseURL = "http://localhost:8000/"
    const {user, setUser} = useContext(UserContext)

    console.log(user);

    useEffect(() => {
        
    }, [])
    
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => user ? <GameListPage /> : <RegisterPage />} />
                    <Route exact path="/register" render={() => <RegisterPage />} />
                    <Route exact path="/login" render={() => <LoginPage />} />
                    <Route exact path="/games" render={() => <GameListPage />} />
                    <Route exact path="/games/:id" render={({match}) => <Main id={match.params.id} />} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;



