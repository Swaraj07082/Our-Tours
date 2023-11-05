import React from 'react'

export default function Structure() {
  return (
    <>
    
    <div className="container text-center"  >
  <div className="row">
    <div className="col">
      {/* <img src="./images/ireland.jpg" alt=""   style={{    width: 352,
    height: 320}}/> */}



<div className="card" style={{width: 352 ,height:620 , position : 'relative' , top : 150}}>
  <img src="./images/ireland.jpg" className="card-img-top" alt="..."   style={{ height : 320}}/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>


    </div>
    <div className="col">

      {/* <img src="./images/rome.jpg" alt=""  style={{    width: 352,
    height: 320}} /> */}


<div className="card" style={{width: 352 , height : 620 , position : 'relative' , top : 150}}>
  <img src="./images/rome.jpg" className="card-img-top" alt="..."  style={{ height : 320}}/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

  </div>
</div>

    </div>
    <div className="col">
    {/* <img src="./images/paris.jpg" alt=""  style={{    width: 352,
    height: 320}}/> */}



<div className="card " style={{width: 352 , height :620 , position:'relative' , top:150 }}>
  <img src="./images/paris.jpg" className= "card-img-top" alt="..." style={{ height : 320}}/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

  </div>
</div>


    </div>
  </div>
</div>




    
    </>
  )
}
