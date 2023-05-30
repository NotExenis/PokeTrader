import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useContext } from 'react';
import {createContext} from "vm";
import {FORMERR} from "dns";

const ThemeContext = createContext(null)
export default function MyApp(){
    return(
        <ThemeContext.Provider value="dark">
            <Form />
        </ThemeContext.Provider>
    )
}