import React from 'react'
import './App.css'
import Main from './components/main/Main'
import Button from './components/button/Button'

const App = () => {

  return (
    <div className="App" >
      <Main />
      <Button ariaLabel='Start'>
        Start
      </Button>
    </div>
  );
}

export default App;
