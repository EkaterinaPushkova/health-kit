import React from 'react';
import {useState} from 'react';
import Register from './pages/Registration/registration';
import AppBarHead from './components/AppBarHead';
import Auth from './pages/Auth/authorization';
import {BrowserRouter,  Route, Routes, Navigate} from 'react-router-dom';
// 
function App() {

  // const [IsLoggedIn] = useState(true);



  return(
    <React.StrictMode>
   
    
      <BrowserRouter>
      <AppBarHead />
    
      <Routes>
      <Route exact path='/' element={<Auth/>}/>
      <Route  path='/registration' element={<Register />}/>
      </Routes>
      </BrowserRouter>
      
    
 
    </React.StrictMode> 
    

  )

  // element={IsLoggedIn ? <Navigate to='/registration'/> :  <p>LolLol</p>/*<Navigate to='/'/>*/} 
}

export default App;