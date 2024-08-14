import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';
import './App.css';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div className="container">
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
    </div>
  );
}

export default App;
