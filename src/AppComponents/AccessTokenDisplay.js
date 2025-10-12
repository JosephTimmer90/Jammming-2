import React from "react";

export default function AccessTokenDisplay(props){
    let displayValue = props.savedAccessToken === null ? "The access token has not been assigned yet." : props.savedAccessToken;
    return(
        <>
            <h1>Please see your assigned access token below:</h1>
            <p>Access Token: {displayValue}</p>
        </>

    )
}