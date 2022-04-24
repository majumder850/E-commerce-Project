import React from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom'
import ProductObj from '../Product.json';

export default function PDetails() {

    let value = useParams();
    console.log("Params value", value);


    let productData = ProductObj.Product.find((x) => x.p_name === value.prodname);
    console.log("Product in Details: ", productData);

    let singleProduct = productData.p_subcat.find((y) => y.s_name === value.subname);
    console.log("Single Product : ", singleProduct);


    return (
        <div>
       <div className='flex-parent'>
            <Row xs={1} md={4} className="g-4" >
                <Col  className="card1">
                <Card  >
                    <Card.Img variant="top" src={singleProduct.s_img} style={{objectFit:"contain"}}/>
                    
                </Card>
                </Col>

                <Col className="card1" >
                <Card.Body  >
                        <h2 >{singleProduct.s_name}</h2>
                        <br/>
                        
                        <Card.Text>
                        {singleProduct.desc}
                        </Card.Text>
                        <br/>
                        <Card.Text style={{fontSize:"30px"}}><b >Price: {singleProduct.price}</b></Card.Text>
                    
                        <Button variant="primary"><Link to="/CardPage" style={{textDecoration:"none", color:"white"}}>Buy Now</Link></Button>
                    </Card.Body>
                </Col>
                </Row>
            </div>
        </div>
    )
}
