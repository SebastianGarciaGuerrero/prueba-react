
export const Cards = ({ characters }) => {
  return (   
    <div className="row">    
        {      
          characters.map((item, index) => (
            <div key={index} className="col p-4">
                <div className="card" style={{minWidth:"200px"}}>
                        <img src={item.image} alt="" />
                    <div className="card.body">
                        <h5 className="card-title">Nombre: {item.name}</h5>
                        <hr/>
                        <p>Ubicación: {item.location.name}</p>
                     </div>                     
                </div>
            </div>
         ))
        }
         </div>
  )
}

export default Cards