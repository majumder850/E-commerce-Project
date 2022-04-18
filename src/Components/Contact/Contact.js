import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div>
      <div className="contactme" id="contact">
        <div className="contactOverlay">
          <div className="container">
            <div className="form1">
              <form action="" onSubmit="" className="form2">
                <div className="formWord">
                  <h2>Get in Touch  !</h2>
                  <span>Full Name</span>
                  <br />
                  <input className="input100" type="text" name="fullName" required />
                  <br />
                  <span>Phone Number</span>
                  <br />
                  <input className="input100" type="text" name="phone" required />
                  <br />
                  <span>Enter Email</span>
                  <br />
                  <input className="input100" type="text" name="email" required />
                  <br />
                </div>
                <div className="formWord">
                  <span>Message</span>
                  <br />
                  <textarea name="message" required></textarea>
                  <br />
                  <button>SUBMIT</button>

                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
