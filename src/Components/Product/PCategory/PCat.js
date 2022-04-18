import React from 'react'
import ProductObj from '../Product.json';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import { Col, Container, Row, CardGroup } from 'react-bootstrap'


export default function PCat() {
  return (
    <div>
      <Container>
        <h1 style={{marginTop:'20px'}}><b>Choose Category : </b></h1>
        <br/>


        <Row xs={1} md={3}  className="g-4" >
          {ProductObj.Product.map((prod) => (

            <Col>
              <Card key={prod.p_id} style={{marginBottom:"150px"}}>
                <Card.Img variant="top" src={prod.p_img}  style={{ height: '50vh' }}/>
                <Card.Body>
                  <h2>{prod.p_name}</h2>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                  </Card.Text>
                  <Button variant="outline-success">
                    <Link to={`/subcat/${prod.p_name}`}>View Subcategory</Link>
                  </Button>{' '}

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>











    </div>
  )
}

