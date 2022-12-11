import React, { useState } from "react";
import AppRouter from './Router';
import {authService} from '../fbase'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser)
  return (
    <div className="App">
      <AppRouter isLoggedIn={isLoggedIn}></AppRouter>
    </div>
  );
}

export default App;
