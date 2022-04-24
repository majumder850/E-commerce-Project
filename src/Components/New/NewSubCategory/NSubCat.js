import React from 'react'
import NewObj from '../New.json';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import { Col, Container, Row, CardGroup } from 'react-bootstrap'
import './NSubCat.css'


export default function NSubCat() {
    return (
        <div>
            <div className='divThird'>


                <Container>



                    <Row xs={1} md={4} className="g-4" >
                        {NewObj.New.map((ne) => (

                            <Col>
                                <Card key={ne.n_id} style={{
                                    marginBottom: "150px", marginTop: "55px", marginLeft: "20px",
                                    height: "70vh", width: "35vh", border:"2px solid black",boxShadow: "5px 8px"
                                }}>
                                    <Card.Img variant="top" src={ne.n_img} style={{ height: '27vh', padding: "15px", objectFit:"contain" }} />
                                    <Card.Body>
                                        <h2>{ne.n_name}</h2>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Button variant="outline-success">
                                            <Link to={`/nsubcat/${ne.n_name}`}>View Subcategory</Link>
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

