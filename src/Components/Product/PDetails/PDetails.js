import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
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
      



            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={singleProduct.s_img} style={{ height: '50vh' }} />
                <Card.Body>
                    <Card.Title>{singleProduct.s_name}</Card.Title>
                    <Card.Text>
                    {singleProduct.desc}
                    </Card.Text>
                    <Card.Text><p>Price: {singleProduct.price}</p></Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
