import {useState} from 'react';
import './App.css';
import Main from './AppComponents/Main';
import Root from './AppComponents/Root';
import AccessTokenRetrieval from './AppComponents/AccessTokenRetrieval';
import AccessTokenDisplay from './AppComponents/AccessTokenDisplay';

import ReactRouterTest from './AppComponents/ReactRouterTest'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider,  } from 'react-router-dom';

function App() {
  const [savedAccessToken, setSavedAccessToken] = useState(null);

  function handleOpenRouterNav(){
    const routerMenu = document.getElementById('router-navigation-menu-closed');
    routerMenu.id = 'router-navigation-menu-open'
  }

  function handleCloseRouterNav(){
    const routerMenu = document.getElementById('router-navigation-menu-open');
    routerMenu.id = 'router-navigation-menu-closed'
  }

 

  const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root
                              handleOpenRouterNav={handleOpenRouterNav}
                              handleCloseRouterNav={handleCloseRouterNav} /> }>
    <Route path='test' element= {<ReactRouterTest />} />
    <Route path='main' element= {<Main />} />
    <Route path='accessTokenRetrieval/:accessToken' element={<AccessTokenRetrieval
                                                              saveAccessToken={saveAccessToken} />} />
    <Route path='accessTokenDisplay' element= {<AccessTokenDisplay 
                                                  savedAccessToken={savedAccessToken} />} />
  </Route>
));

  function saveAccessToken(accessToken){
    setSavedAccessToken(accessToken);
  }
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;

