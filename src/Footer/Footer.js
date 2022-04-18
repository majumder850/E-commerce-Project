import React from 'react'
import { TiSocialFacebook, TiSocialInstagram, TiSocialYoutube, TiSocialTwitter } from "react-icons/ti";

import './Footer.css'

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-6 col-lg-3">
                                    <h4>GET TO KNOW US</h4>
                                    <ul>
                                        <li>
                                            <a className="list" href="#">About Us</a>
                                        </li>
                                        <li>
                                            <a className="list" href="#">Careers</a>
                                        </li>
                                        <li>
                                            <a className="list" href="#">Press Releases</a>
                                        </li>
                                        <li>
                                            <a className="list" href="#">Gift a Smile</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">
                                    <h4 style={{marginLeft:"25px" }}>SUPPORT</h4>
                                    <ul>
                                        <li>
                                            <a className="list" href="#">Payments</a>
                                        </li>
                                        <li>
                                            <a className="list" href="#">Shipping</a>
                                        </li>
                                        <li>
                                            <a className="list" href="#">Returns</a>
                                        </li>
                                        <li>
                                            <a className="list" href="#">Report Infringement</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">
                                    <h4 style={{marginLeft:"28px" }}>POLICY</h4>
                                    <ul>
                                        <li>
                                            <a className="list" href="#">Security</a>
                                        </li>
                                        <li>
                                            <a className="list" href="#">Privacy</a>
                                        </li>
                                        <li>
                                            <a className="list" href="#">Sitemap</a>
                                        </li>
                                        <li>
                                            <a className="list" href="#">EPR Compliance</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">
                                    <h4>FOLLOW US</h4>
                                    <br/>
                                    <div className="row">
                                        <div className="col-3 mx-auto">
                                            <TiSocialFacebook style={{fontSize:"40px", marginRight:"40px"}}/>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <TiSocialInstagram style={{fontSize:"40px", marginRight:"40px"}}/>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <TiSocialYoutube style={{fontSize:"40px", marginRight:"40px"}}/>
                                        </div>
                                        <div className="col-3 mx-auto">
                                           <TiSocialTwitter style={{fontSize:"40px"}}/>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <hr />
                            <div className="mt-5">
                                <p className="para text-center w-250">
                                    Copyright @ 2021, Denims FX.com, Inc. or its affiliates. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            
        </div>
    )
}
