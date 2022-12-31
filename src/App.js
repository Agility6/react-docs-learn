import './App.css'
import { useState } from 'react'
import MyButton from './components/MyButton'
import Lists from './components/Lists'
import Conditional from './components/Conditional'
import Image from './components/Image'
import Arithmometer from './components/Arithmometer'
import Game from './components/TicTacToe/Game'

function MyButton2({count, onClick}) {
  return (
    <button onClick={onClick}>
      Clicked {count} times(Sharing data between components)
    </button>
  ) 
}

function App() {

  // Sharing data between components
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>

      <h1 className='title'>Welcome to my app</h1>
      <MyButton />
      <Image />
      <Conditional />
      <Lists />
      <h2>Counters that update separately</h2>
      <Arithmometer />
      <Arithmometer />
      <h2>Sharing data between components</h2>
      <MyButton2 count={count} onClick={handleClick} />
      <MyButton2 count={count} onClick={handleClick} />
      
      <div>
        <Game />
      </div>
    </div>
  );
}

export default App;
