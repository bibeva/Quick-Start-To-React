export default function RespondToEvent() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <div className="box">
      <button onClick={handleClick}>Click me!</button>
    </div>
  )
}