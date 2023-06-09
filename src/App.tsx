import * as React from "react";
import {createBrowserRouter, BrowserRouter , Route, Routes, RouterProvider} from "react-router-dom";
import * as DOM from "react-dom/client";
import Homescreen from "./pages/homescreen/homescreen";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Root from "./routes/root";
import ErrorPage from "./errors/errorpage";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/"
                           element={<Homescreen />} />
                    <Route path="/login"
                           element={<Login />} />
                    <Route path="/register"
                           element={<Register />} />
                </Routes>
        </BrowserRouter>
    );
};

export default Application;