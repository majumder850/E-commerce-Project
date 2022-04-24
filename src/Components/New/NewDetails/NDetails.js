import React, {useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import NewObj from '../New.json';
import './NDetails.css';
import Card from "react-bootstrap/Card";
import { Button, Col, Container, Row } from 'react-bootstrap'

export default function NDetails() {

    let data = useParams();
  console.log("Recieved value in subcat: ", data);

 
 

  let newData=NewObj.New.find((y)=>y.n_name === data.nprodname);
  console.log("New: ",newData);


  return (
    <div>
          <div className='flex-parent'>
            <Row xs={1} md={4} className="g-4" >
                <Col  className="card1">
                <Card  >
                    <Card.Img variant="top" src={newData.n_img} style={{objectFit:"contain"}}/>
                    
                </Card>
                </Col>

                <Col className="card1" >
                <Card.Body  >
                        <h2 >{newData.n_name}</h2>
                        <br/>
                        
                        <Card.Text>
                        {newData.desc}
                        </Card.Text>
                        <br/>
                        <Card.Text style={{fontSize:"30px"}}><b >Price: {newData.price}</b></Card.Text>
                    
                        <Button variant="primary"><Link to="/CardPage" style={{textDecoration:"none", color:"white"}}>Buy Now</Link></Button>
                    </Card.Body>
                </Col>
                </Row>
            </div>
    </div>
  )
}
