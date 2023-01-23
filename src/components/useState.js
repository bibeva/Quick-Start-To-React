export default function UseState({count, onClick}) {
  return (
    <div className="box">
      <p>{count}</p>
      <button onClick={onClick}>Click</button>
    </div>
  )
}