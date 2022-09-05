import React, {createContext,useState} from 'react';
import MySwitch from './components/mySwitch';

import './App.scss';


export const ThemeContext= createContext(null);
 

function App() {
  const [theme, setTheme]= useState("dark");

  const toggleTheme= () => setTheme((curr)=>(curr==="light" ? "dark":"light"));
  ;
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className='wrapper' id={theme}>
      <h1>Welcome</h1>
      <div className= 'switch'>

        
        
         {<MySwitch toggleTheme={toggleTheme} checked={theme === "dark"}/> }
      
        </div>
      </div>
      </ThemeContext.Provider>
  );
}

export default App;
