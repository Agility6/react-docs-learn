// Responding to events 
export default function MyButton() {
  function handleClick() {
    alert("You clicked me!")
  }
  return(
    <button onClick={handleClick}>Click me</button>
  )
}