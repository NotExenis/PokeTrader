import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
]);

ReactDOM.createRoot(document.getElementById("sidebar")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)

function App() {
    return(
        <div>
            <router />
        </div>
    )
}

export default App;