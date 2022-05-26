import React from 'react';
import {useState} from 'react';
import AppBarHead from './components/AppBarHead';
import Auth from './pages/Authorization';
import Register from './pages/Registration';
import Main from './pages/Main'
import Profile from './pages/Profile';
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
      <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
      
 
    </React.StrictMode> 
  
  )

}

export default App;