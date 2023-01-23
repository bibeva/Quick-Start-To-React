const products = [
  {
    id: 1,
    title: 'Monitor'
  },
  {
    id: 2,
    title: 'Keyboard'
  },
  {
    id: 3,
    title: 'Mouse'
  }
]

export default function RenderingLists() {
  return (
    <div className="box">
      <h2>My Lists</h2>
      <ul>
        {
          products.map(product => {
            return (
              <li key={product.id}>{product.title}</li>
            )
          })
        }
      </ul>
    </div>
  )
}