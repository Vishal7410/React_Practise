import { useRouteError } from "react-router-dom"
const ErrorPage =() => {
    const err = useRouteError()
    console.log(err);
 const {status,statusText} = err
 
    return (
        <>

        {/* <h1>Error Page</h1>
        <h2>{err.status + " : " + err.statusText}</h2> */}

        {/* ya we can also destructure it like make and compoent and do like that */}
        
        <h1 style= {{
            textAlign: "center",
            justifyContent: "center",
            backgroundColor: "blue"

    }}>{status} {statusText} </h1>


        
        
        </>
    )
}

export default ErrorPage