import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import FlatObj from '../Flat.json';
import './FDetails.css';
import Card from "react-bootstrap/Card";
import { Button, Col, Container, Row } from 'react-bootstrap'

export default function FDetails() {

    let data = useParams();
    console.log("Recieved value in subcat: ", data);




    let flatData = FlatObj.Flat.find((z) => z.f_name === data.fprodname);
    console.log("New: ", flatData);


    return (
        <div>
           



            <div className='flex-parent'>
            <Row xs={1} md={4} className="g-4" >
                <Col  className="card1">
                <Card  >
                    <Card.Img variant="top" src={flatData.f_img} style={{objectFit:"contain"}}/>
                    
                </Card>
                </Col>

                <Col className="card1" >
                <Card.Body  >
                        <h2 >{flatData.f_name}</h2>
                        <br/>
                        
                        <Card.Text>
                        {flatData.desc}
                        </Card.Text>
                        <br/>
                        <Card.Text style={{fontSize:"30px"}}><b >Price: {flatData.price}</b></Card.Text>
                    
                        <Button variant="primary" > <Link to="/CardPage" style={{textDecoration:"none", color:"white"}}>Buy Now</Link></Button>
                    </Card.Body>
                </Col>
                </Row>
            </div>
        </div>
    )
}
