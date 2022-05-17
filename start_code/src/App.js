// import { useState } from 'react';
import MainPage from './pages/MainPage';
import { useToggle } from './hooks/useToggle'


function App() {

  const toggleResponse = useToggle()

  return (
    <div className={toggleResponse.isDarkMode ? "dark" : "light"}>
      <button onClick={toggleResponse.toggleDarkMode}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
