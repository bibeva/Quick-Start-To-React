const data = {
  title: 'Welcome to my React',
  description: 'Ei vim cibo eripuit, ridens lobortis persecuti te eos. Eum te erant assueverit. Est semper sadipscing no, posse constituto philosophia in sit. His summo concludaturque ei, tota tacimates assueverit no mel. Vim sumo elitr electram ut, an sea mutat legendos atomorum.',
  image: 'https://via.placeholder.com/80'
}

function CreateAndUseComponent() {
  return (
    <div className="box">
      <div className="image">
        <img src={data.image} alt={data.title} />
      </div>
      <h2>{data.title}</h2>
      <p 
        className="large" 
        style={{
          color: '#777',
          maxWidth: '500px',
          margin: '0 auto 30px'
        }}
      >
        {data.description}
      </p>
      <button>Read more</button>
    </div>
  )
}

export default CreateAndUseComponent;