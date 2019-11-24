import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import Navbar from './Components/navbar/Navbar';
import Profile from './Components/profile/Profile';
import Dialogs from "./Components/dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/dialogs/DialogsContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/users' render={() => <div>Users</div>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
