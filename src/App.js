import React from 'react';
import Register from './pages/Registration/registration';
import AppBarHead from './components/AppBarHead';


function App() {
  return(
    <React.StrictMode>
      <AppBarHead />
      <Register />
    </React.StrictMode>
    
  )
}

export default App;