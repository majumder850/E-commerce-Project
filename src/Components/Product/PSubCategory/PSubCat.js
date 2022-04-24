import React, {useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import ProductObj from '../Product.json';
import './PSubCat.css';
import Card from "react-bootstrap/Card";
import { Button, Col, Container, Row } from 'react-bootstrap'

export default function PSubCat() {

    let data = useParams();
  console.log("Recieved value in subcat: ", data);

 

  let productData=ProductObj.Product.find((x)=>x.p_name === data.prodname);
  console.log("Product: ",productData);




  return (
    <div>

<div  className="divFifth">
         <Container>
      
        <br />
       


        <Row xs={1} md={3}>

          {        
            productData.p_subcat.map((psub) => (
              <Col >
                <>
                  {/* <h4>{psub.s_name}</h4> */}
                  {/* <h6>{psub.desc}</h6> */}

                   <Card key={psub.id} style={{
                marginBottom: "150px", marginTop: "55px", marginLeft: "20px",
                height: "70vh", width: "35vh", border:"2px solid black", boxShadow: "5px 8px"
            }}>
                     <Card.Img variant="top" src={psub.s_img} style={{ height: '27vh', padding: "15px", objectFit:"contain"  }}/>
                    <Card.Body>
                      <Card.Title>{psub.s_name}</Card.Title>
                      <Card.Text>
                        {psub.desc}
                      </Card.Text>
                      <br/>
                      <br/>
                      <Button variant="warning">
                        <Link to={`/details/${data.prodname}/${psub.s_name}`}>
                          Show details</Link>
                      </Button>
                    </Card.Body>
                  </Card>
                </>
              </Col>
            ))
          }
        </Row>
      </Container> 

      </div>
    </div>
  )
}
