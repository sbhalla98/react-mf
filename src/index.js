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
            <div></div>
            <REmoteFile />
        </h1>
    )
}

export default App