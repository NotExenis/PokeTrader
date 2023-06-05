import * as React from "react";
import {createBrowserRouter, BrowserRouter , Route, Routes, RouterProvider} from "react-router-dom";
import * as DOM from "react-dom/client";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Root from "./routes/root";
import ErrorPage from "./errors/errorpage";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Root />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Application;