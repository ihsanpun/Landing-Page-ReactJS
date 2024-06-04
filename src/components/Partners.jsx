import '../styles/Partners.css'
function Partners(props) {
    return (
      <div className="partner-list">
      {
          props.listPartner.map((item,index)=>{
              return(
                  <div className='kartu-partner' key={index}>
                      <img src={item.image}/>  
                      <p>{item.name}</p>
                  </div>
              )
          })
      }
      </div>
    )
  }
export default Partners
