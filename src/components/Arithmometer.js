import { useState } from "react"

// Updating the screen
export default function Arithmometer() {
  
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <button onClick={handleClick}>
      Click {count} times
    </button>
  )
}