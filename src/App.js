import React from 'react';
import {useState} from 'react';
import AppBarHead from './components/AppBarHead';
import Auth from './pages/authorization';
import Register from './pages/registration';
import Main from './pages/main'
import {BrowserRouter,  Route, Routes} from 'react-router-dom';
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
      <Route path='/main/*' element={<Main/>}/>
      </Routes>
      </BrowserRouter>
      
 
    </React.StrictMode> 
  
  )

  // element={IsLoggedIn ? <Navigate to='/registration'/> :  <p>LolLol</p>/*<Navigate to='/'/>*/} 
}

export default App;