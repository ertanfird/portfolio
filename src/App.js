import React, {useState} from 'react';
import './App.sass';

import { Link, animateScroll as scroll } from "react-scroll";

import NavBar from './components/UI/navigation/NavBar';
import Header from './components/Header';
import ScreenHome from './components/ScreenHome';
import ScreenSkills from './components/ScreenSkills';
import ScreenProjects from './components/ScreenProjects';
import ScreenPrice from './components/ScreenPrice';

function App() {

    return(
        <div className="App">
            <Header />
            <NavBar />
            <ScreenHome />
            <ScreenSkills />
            <ScreenProjects />
            <ScreenPrice />
        </div>
    )
}

export default App;
