import React, { useEffect, useRef } from "react";
import REmoteFile from "remote/Loading";

const App = () =>{


    // const divRef = useRef(null);

    // useEffect(() => {
    //     REmoteFile(divRef.current);
    //     console.log("ss")
    // }, [])
    return (
        <h1>
            Hello world! I am using React
            <div>{process.env.MY_ENV}</div>
            <div>{process.env.NEW_ENV_VAR}</div>
            <div>{process.env.REACT_APP_NEW_ENV_VAR}</div>
            <REmoteFile />
        </h1>
    )
}

export default App