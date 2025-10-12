import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Root(props){
    return (
        <>
            <Header 
                handleOpenRouterNav={props.handleOpenRouterNav}
                handleCloseRouterNav={props.handleCloseRouterNav}/>
                <Outlet />
            <Footer />
        </>
    )
}