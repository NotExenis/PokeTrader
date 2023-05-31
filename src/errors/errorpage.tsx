import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError();
    console.error(error);

    function isError(obj: any): obj is Error {
        return obj instanceof Error;
    }

    const errorText = isError(error) ? error.message : "";

    return(
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{errorText}</i>
            </p>
        </div>
    );
}
