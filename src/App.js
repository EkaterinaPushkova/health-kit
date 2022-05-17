import React from 'react';
import Register from './pages/Registration/registration';
import AppBarHead from './components/AppBarHead';
import Auth from './pages/Auth/authorization';
import {BrowserRouter,  Route, Routes} from 'react-router-dom';
// 
function App() {




  return(
    <React.StrictMode>
   
    
      <BrowserRouter>
      <AppBarHead />
    
      <Routes>
      <Route exact path='/' element={<Auth/>}/>
      <Route  path='/registration' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      
    
    
    </React.StrictMode> 
    

  )

  
}

export default App;