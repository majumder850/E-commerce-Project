import React from 'react'
import { Card } from 'react-bootstrap'

export default function Home() {
  return (
    <div>
      <Card className="bg-dark text-white border-0">
        <Card.Img src="../../../../Images/header.jpeg" alt="Card image" height="850px" />
        <Card.ImgOverlay>
          <div className='container'>
            <h5 className='card-title display-3 fw-bolder mb-0' style={{marginTop:"200px", marginLeft:"600px"}}>EVERY ESSENTIALS  THAT YOU NEED</h5>          
          </div>

        </Card.ImgOverlay>
      </Card>


      <Card className="bg-dark text-white border-0">
        <Card.Img src="../../../../Images/header2.jpg" alt="Card image2" height="450px" />
        <Card.ImgOverlay>
          <div className='container'>
            <h5 className='card-title display-3 fw-bolder mb-0' style={{marginTop:"200px", marginRight:"658px"}}>OFFERS THAT WILL DRIVE YOU CRAZY</h5>          
          </div>

        </Card.ImgOverlay>
      </Card>

      <Card className="bg-dark text-white border-0">
        <Card.Img src="../../../../Images/header3.webp" alt="Card image3" height="750px" />
      </Card>
    </div>
  )
}
