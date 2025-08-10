import React from 'react';
import UserContextProvider from './context/UserContextProvider';  // Adjust path if needed
import Login from './component/Login';  
import Profile from './component/profile'; 

function App() {
  return (
    <UserContextProvider>
      <h1>React Context Management</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
