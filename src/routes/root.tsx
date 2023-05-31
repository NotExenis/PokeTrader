import {Link} from "react-router-dom";
export const sidebarID = "sidebar";

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <h1>Router</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={'login'}>Login</Link>
                        </li>
                        <li>
                            <Link to={'register'}>Register</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail"></div>
        </>
    );
}