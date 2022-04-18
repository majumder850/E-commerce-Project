import React from 'react'
import { Card } from 'react-bootstrap'
import './About.css'

export default function About() {
  return (
    <div>
      <Card className="bg-dark text-white border-0">
        <Card.Img src="../../../../Images/about1.png" alt="About image" height="650px" />
        <Card.ImgOverlay>
          <h1 style={{ marginRight: "150vh", marginTop: "100px" }}>OUR COMPANY</h1>
          <hr style={{ height: 10, marginLeft: "50px", marginRight: "157vh", color: "#FFFFFF", marginTop: "20px" }} />
          <br />
          <div style={{ marginLeft: "10vh" }}>
            <Card.Text style={{ marginRight: "100vh", color: "#000000", fontSize: "25px" }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem   <br /> laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </Card.Text>
          </div>

        </Card.ImgOverlay>
      </Card>




      <Card className="bg-dark text-white border-0">
        <Card.Img src="../../../../Images/about2.jpeg" alt="About image" height="700px" />
        <Card.ImgOverlay>
          <h1 style={{ marginLeft: "100vh", marginTop: "100px" }}>OUR VISION</h1>
          <hr style={{ height: 10, marginRight: "240px", marginLeft: "138vh", color: "#FFFFFF", marginTop: "20px" }} />
          <br />
          <div style={{ marginRight: "10vh" }}>
            <Card.Text style={{ marginLeft: "100vh", color: "#FFFFFF", fontSize: "25px" }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem   <br /> laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </Card.Text>
          </div>

        </Card.ImgOverlay>
      </Card>


      {/* ________________________________ */}


    <div className="wrapper">
      <h1>Our Team</h1>
      <div className="team">
        <div className="team_member">
          <div className="team_img">
            <img src="../../../../Images/team1.png" alt="Team_image"/>
          </div>
          <h3 style={{color:"#ff9900", fontSize:'35px'}}>
            Howard Wolowitz
          </h3>
          <p className="role" style={{color:"#666699", fontSize:'15px',fontWeight:'bold'}}>UI developer</p>
          <p style={{fontSize:'25px', marginTop:'40px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
        </div>
        <div className="team_member">
          <div className="team_img">
            <img src="../../../../Images/team2.png" alt="Team_image"/>
          </div>
          <h3 style={{color:"#ff9900", fontSize:'35px'}}>Amy Farrahfowler</h3>
          <p className="role" style={{color:"#666699", fontSize:'15px',fontWeight:'bold'}}>Tester</p>
          <p style={{fontSize:'25px', marginTop:'40px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p></div>
        <div className="team_member">
          <div className="team_img">
            <img src="../../../../Images/team3.png" alt="Team_image"/>
          </div>
          <h3 style={{color:"#ff9900", fontSize:'35px'}}>Sheldon Cooper</h3>
          <p className="role" style={{color:"#666699", fontSize:'15px',fontWeight:'bold'}}>Support Lead</p>
          <p style={{fontSize:'25px', marginTop:'40px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
        </div>
      </div>
    </div>
  </div>
  )
}
