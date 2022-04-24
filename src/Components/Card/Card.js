import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'



export default function Card() {

    const message = () => {
    alert('Yipee !! You placed your Order.')
}

    return (
        <div >
            <div className='background'>
                <div>
                    <form className='rtu'>



                        <h2 style={{ marginBotton: "50px" }} className="login">Enter Card Details</h2>
                        <br />

                        <input type="email" name="email"
                            placeholder="Card Number &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; MM/YY CVC "


                            className="input1" />

                        <br />

                        <input type="email" name="email"
                            placeholder="Street Address"


                            className="input1" />
                        <br />

                        <input type="email" name="email"
                            placeholder="State"


                            className="input1" />
                        <br />

                        <input type="email" name="email"
                            placeholder="City"


                            className="input1" />
                        <br />

                        <input type="email" name="email"
                            placeholder="Zip Code"


                            className="input1" />

                        <br />
                        <br />
                        <Button type="submit" variant="primary" style={{ padding: "18px", marginRight: "20vh" }} onClick={message}>PROCEED TO BUY</Button>

                  





                    </form>
                </div>


            </div>
           



        </div>
    )
}