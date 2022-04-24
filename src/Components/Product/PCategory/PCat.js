import React from 'react'
import ProductObj from '../Product.json';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import { Col, Container, Row, CardGroup } from 'react-bootstrap'
import './PCat.css'


export default function PCat() {
  return (
    <div>
     

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1621488513434/today-electronics-offers.jpg"
            alt="First slide"
            style={{height:"70vh"}}
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://www.gizbot.com/img/2020/05/amazon-sells-electronics-gadgets-at-heavy-discounts-1590514487.jpg"
            alt="Second slide"
            style={{height:"70vh"}}
          />

        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.pennysaviour.com/images/blog/get-7-days-a-week-shopping-sales-online.jpg"
            alt="Third slide"
            style={{height:"70vh"}}
          />

       
        </Carousel.Item>
      </Carousel>










      <div  className="divFourth">

      <Container>
        <h1 style={{paddingTop:"80px"}}><b>Choose Category : </b></h1>
        <br />


        <Row xs={1} md={4} className="g-4" >
          {ProductObj.Product.map((prod) => (

            <Col >
              <Card key={prod.p_id}  style={{
              marginBottom: "150px", marginTop: "55px", marginLeft: "20px",
              height: "70vh", width: "35vh", border:"2px solid black", boxShadow: "5px 8px"
          }}>
                <Card.Img variant="top" src={prod.p_img} style={{ height: '27vh', padding: "15px", objectFit:"contain"  }} />
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











    </div>
  )
}

