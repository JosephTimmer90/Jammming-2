import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function AccessTokenRetrieval(props){
    let {accessToken} = useParams();
    const navigate = useNavigate();
    const modified = Number(accessToken)/100;
    props.saveAccessToken(accessToken);
    useEffect(()=>{navigate('/accessTokenDisplay')})
    return(
        <>
            <h1>Please see your access token below.</h1>
            <p>{accessToken} is your access token, and {modified} is your modififed access token.</p>
        </>

    )

}