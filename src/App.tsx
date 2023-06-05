import * as React from "react";
import {createBrowserRouter, BrowserRouter , Route, Routes, RouterProvider} from "react-router-dom";
import * as DOM from "react-dom/client";
import Login from "./pages/login/login";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root";
import ErrorPage from "./errors/errorpage";
// import Register from "./pages/register/register";


// let container: Element | DocumentFragment | null = null;
// document.addEventListener('DOMContentLoaded', function (event){
//     if(!container){
//         container = document.getElementById("root") as HTMLElement;
//         const root = DOM.createRoot(container)
//         root.render(
//             <React.StrictMode>
//                 <RouterProvider router={router} />
//             </React.StrictMode>
//         )
//
//     }
// })
//
let router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/Login',
                element: <Login />,
            },
            {
                path: '/Register',
                // element: <Register />,
            },
            // {
            //     path: '/Profile',
            //     // element: <Root />,
            // },
            // {
            //     path: '/Marketplace',
            //     element: <Root />,
            // },
        ]
    },
]);

DOM.createRoot(document.getElementById("root") as HTMLElement).render(
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        )
    // <React.StrictMode>
    //     <div className="parent">
    //         <BrowserRouter>
    //             <Routes>
    //                 <Route path={"/"} element={<App />} />
    //                 <Route path={"/login"} element={<Login />} />
    //                 {/*<Route path={"/register"} element={<Register />} />*/}
    //             </Routes>
    //         </BrowserRouter>
    //     </div>
    // </React.StrictMode>
// )

function App() {
    return (
        <div>

        </div>
    )
}
export default App;
