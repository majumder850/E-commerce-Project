import React, {useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import BestObj from '../Best.json';
import './BDetails.css';
import Card from "react-bootstrap/Card";
import { Button, Col, Container, Row } from 'react-bootstrap'

export default function BDetails() {

    let data = useParams();
  console.log("Recieved value in subcat: ", data);

 
 

  let bestData=BestObj.Best.find((z)=>z.b_name === data.bprodname);
  console.log("Best: ",bestData);


  return (
    <div>
        

      <div className='flex-parent'>
            <Row xs={1} md={4} className="g-4" >
                <Col  className="card1">
                <Card  >
                    <Card.Img variant="top" src={bestData.b_img} style={{objectFit:"contain"}}/>
                    
                </Card>
                </Col>

                <Col className="card1" >
                <Card.Body  >
                        <h2 >{bestData.b_name}</h2>
                        <br/>
                        
                        <Card.Text>
                        {bestData.desc}
                        </Card.Text>
                        <br/>
                        <Card.Text style={{fontSize:"30px"}}><b >Price: {bestData.price}</b></Card.Text>
                    
                        <Button variant="primary"><Link to="/CardPage" style={{textDecoration:"none", color:"white"}}>Buy Now</Link></Button>
                    </Card.Body>
                </Col>
                </Row>
            </div>
    </div>
  )
}
