import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import LMDPorter from '../src/Components/Assets/Img/LMDPorter.png';
import Graph1 from '../src/Components/Assets/Img/Graph1.jpg';
import iPhoneCamera from '../src/Components/Assets/Img/iPhoneCamera.jpg';
import DeliveryResults from '../src/Components/Assets/Img/DeliveryResults.gif';
import DeliveriesPerHour from '../src/Components/Assets/Img/DeliveriesPerHour.gif';
import LMDHeader from '../src/Components/Assets/Img/LMDHeader.jpg'
import LMDMultiModal from '../src/Components/Assets/Img/MultiModal.png'
import LMDPersona from '../src/Components/Assets/Img/LMDPersona.png'
import Jumbotron from 'react-bootstrap/Jumbotron';
import {LinkContainer} from 'react-router-bootstrap';


const Styles = styled.div`

.headerJumbotronImage {
  max-width: 100%; 
  height: auto;
  margin-bottom: 20px;
}

.projectPicture {
    max-width: 100%;
    height:
}

.headerCopy {
  font-family: Open Sans, sans-serif;
  font-size: 1.9rem;
  font-weight: bold;
  color: black;
  
}

.subHeaderCopy{
  font-family: Open Sans, sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: black;
  text-transform: uppercase;
}

.bodyCopy {
  font-family: Open Sans, sans-serif;
  font-size: 1.08rem;
  line-height: 26px;
  color: #202020;
}

.myRoleHeader {
  background-color: #2E2E2E;
  margin-top: 50px;
  margin-bottom: 100px;

}

 .myRoleHeaderCopy {
  font-family: Open Sans, sans-serif;
  font-size: 1.9rem;
  font-weight: bold;
  color: white;
  
}

.myRoleBodyCopy {
  text-decoration:none;
  font-size: 1.1rem;
  font-family: Open Sans, sans-serif;
  color: white;
  list-style-type: none;
}

.whatIDidCopy {
  font-family: Open Sans, sans-serif;
  font-size: 1.1rem;
  color: white;
  list-style-type: disc;
  line-height: 2rem;
  padding-left: 15px;

}

.projectBackgroundHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.9rem;
  line-height: 40px;
  color: black;
}

.projectBackgroundSubHeader {
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 28px;
/* or 140% */

}

.projectBackgroundBody {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.15rem;
  line-height: 24px;
  /* or 120% */
  color: #202020;
  }
  

.fieldResearchHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.9rem;
  line-height: 28px;
  color: black;

}

.fieldResearchSubHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 150%;
  /* identical to box height, or 33px */
  letter-spacing: 0.01em;
  color: #000000;
}


.fieldResearchBodyCopy {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.15rem;;
  line-height: 24px;

}

.fieldResearchList {
  font-family: Open Sans, sans-serif;
  font-size: 1.15rem;
  color: black;
  list-style-type: disc;
  padding-left: 15px;
  

}

.prototypeHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.9rem;
  line-height: 28px;
  color: black;
}

.usabilityHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.9rem;
  line-height: 28px;
  color: black;
}

.usabilitySubHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 150%;
  /* identical to box height, or 33px */
  letter-spacing: 0.01em;
  color: #000000;
}

.usabilityList {
  font-family: Open Sans, sans-serif;
  font-size: 1.15rem;
  color: black;
  list-style-type: disc;
  padding-left: 15px;
  

}

.personaHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.9rem;
  line-height: 28px;
  color: black;
}

.finalSoloutionImage {
  height:auto !important;
  max-width:100% !important;

 }


.takeawayJumbotron {
  background-color: #F7F7F7;
  margin-top: 50px;
}

.takeawayHeaderCopy {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 150%;

}

.takeawayLine {
  border-top: 2px solid;
  color: black;
}

.takeawayListStyle {
  padding-left: 15px;
}

.takeawayListText {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: 0.015em;
  color: #000000;

}


.impactCopy {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.15rem;
  line-height: 24px;
  /* or 120% */
  color: #202020;
}

  .nextProjectHeader {
    margin-top: 50px;
    background-color: #7A56FF;
    margin-bottom: 0px;
  }

  .nextProjectHeaderCopy {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 150%;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  .nextProjectSubHeaderCopy {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 2.55rem;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    }

`;

export const LMD = () => (

<Styles>

<Container-fluid>
        <img className = "headerJumbotronImage" 
        alt ="last mile delivery in action" src={LMDHeader} />
        <div className="mb-5"> </div>
</Container-fluid>

<Container>
        <Row className="mt-5">
          <div className="col-md-5 col-xl-5 mb-5">
            <h3 className="headerCopy">Project Overview</h3>
            <h5 className="mt-4 subHeaderCopy">Problem</h5>
            <p className="bodyCopy mb-4">Porters delivering parcels around the city, need a way to understand what deliveries and collections they need to complete on the move. So that they can drop off parcels and complete their job.
            </p> 
            <h5 className="subHeaderCopy"> Goal</h5>
            <p className="bodyCopy mb-4">The goal of the project was to design a mobile app for porters. The app allows porters to see their deliveries, collections for the day. The project had a limited budget, which meant we had to start delivering parcels as soon as possible to start earning revenue. 
            </p>
            <h5 className="subHeaderCopy">The Team</h5>
            <p className="bodyCopy">
            On this project i was the <b>design lead </b>. I was working with 1 UX designer 1 UI designer and 2 iOS developers, 2 product managers, 20 delivery porters.
            </p>
          </div>
          <div className = "offset-xl-1 col-xl-6 col-md-7 col-sm-12 col-xs-12">
          <img className = "projectPicture" alt ="roadside assistance app" src={LMDPorter} />
          </div>
        </Row>
 </Container>

 <Jumbotron className = "myRoleHeader">
          <Container>
            <Row>
              <div className="col-md-5">
               <h3 className="myRoleHeaderCopy">My Role</h3>
               <div className="myRoleBodyCopy">
               <p>
               Since 2019 I've been <b>leading</b> a team of product designers responsible for designing, realising the vision and scaling for the Last Mile Delivery project.
               </p>
               <p> Our team works with partners and stakeholders across the globe and of every discipline.</p>
               <p>The delivery app has helped deliver over 40,000 parcels in London.</p>
               </div>
              </div>
              <div className="offset-md-2 col-md-5">
               <h3 className="myRoleHeaderCopy">What I Did</h3>
               <ul className="whatIDidCopy">
                 <li>Lead the product vision and strategy </li>
                 <li>Lead the visual design for the entire iOS app. </li>
                 <li>Design System Manager</li>
                 <li>Research coordination</li>
                 <li>Executive presentations to CEO</li>
                 <li>Establishing and documenting patterns and best practices</li>
                 
               </ul> 
              </div>
            </Row>
          </Container>
      </Jumbotron>

<Container>
  <Row>
  <div className="col-12">
    <h1 className ="projectBackgroundHeader">Last Mile Delivery Background</h1>
    <h5 className="mt-4 projectBackgroundSubHeader">Congestion In Cities Is Getting Worse</h5>
    <p className="projectBackgroundBody">Congestion in mega cities is getting worse every year. This results in an increase in journey times and worsening air polloution in the city.
       90% of road space in London is taken up for transporting goods.
    </p>
    <h5 className="mt-4 projectBackgroundSubHeader">A new way of delivering parcels</h5>
    <p className="projectBackgroundBody">The Last Mile Delivery (LMD) project aims to help ease congestion off the roads and save the envionment. We do this by delivering parcels with a innovative multi modal solution, by breaking down the journey of a parcel in the last mile. Using pedestrian porters and cyclists teamed up with vans
    </p>
    <h5 className="mt-4 projectBackgroundSubHeader">Multi Modal Delivery explained </h5>
    <p className="projectBackgroundBody">Traditionally parcels are delivered using one van and one driver. 
    The LMD multi modal soloution allows you to deliver parcels with one van with multiple porters and cyclists sharing the <b>same</b> van.
    </p>
    <p className="projectBackgroundBody">This allows us to increase delivery efficiency and take more delivery vans off the road. This helps reduce  congestion in cities and improve air pollution.
    </p>
  </div>
  </Row>
  
  <Row>
  <div className="col-12">
  <img className = "mt-5 headerJumbotronImage" alt ="last mile delivery in action" src={LMDMultiModal} />
  </div>
  </Row>
</Container>

<Container>
  <Row>
    <div className="col-12 mt-5">
    <h2 className = "fieldResearchHeader">Measuring Impact and Success</h2>
    </div>
    </Row>
    <Row>
    <div className="col-xl-6 mb-5 mt-3">
      <h4 className = "fieldResearchSubHeader"> Scaling up using iOS App</h4>
      <p className="fieldResearchBodyCopy">It was made clear from the start
      of the project we wanted to scale up to 1000 parcels a day, to make the project profitable. The iOS app will be a key part to reach this target with the porters using the app to deliver the parcels.
      </p>
      <h4 className="fieldResearchSubHeader">Key Metrics and Targets:</h4>
      <ul className="fieldResearchList">
        <li>Getting porters to deliver 16 parcels per hour.</li>
        <li className="mt-2">Delivering 1000 parcels a day.</li>
        <li className="mt-2">Adding new post codes and areas successfully.</li>
        <li className="mt-2">Allowing Hermes to take full autonomy of the pilot without Ford helping out.</li>
      </ul>
    </div>
    <div className="col-xl-6 mt-5 mb-5">
    <img className = "projectPicture" alt ="LMD metrics for success" src={Graph1} />
    </div>
    </Row>
    <Row>
    <div className="col-12 mt-5">
    <h2 className="personaHeader">Persona for our porters</h2>
    </div>
    <div className="col-12">
    <img className = "mt-2 headerJumbotronImage" alt ="last mile delivery in action" src={LMDPersona} />
    </div>
  </Row>
  </Container>


<Container>
  <Row>
    <div className="col-12 mt-5">
    <h2 className = "fieldResearchHeader">Field Research</h2>
    </div>
    </Row>
    <Row>
    <div className="col-xl-6 mb-5 mt-3">
      <h4 className = "fieldResearchSubHeader"> Building empathy with our users</h4>
      <p className="fieldResearchBodyCopy">It’s important as a designer to build empathy with our end users. By experiencing the delivery process first hand as a porter allowed me to understand the pain porters porters face. 
      </p>
      <h4 className="fieldResearchSubHeader">Key Porter Pain Points:</h4>
      <ul className="fieldResearchList">
        <li>Traffic and congestion in the city adds significant journey time</li>
        <li className="mt-2">Porters want to deliver parcels as quick as possible to get the job done</li>
        <li className="mt-2">Native in app navigation isn't as good as using Waze or Google Maps </li>
        <li className="mt-2">When leaving a parcel in a safe place they can get stolen </li>
      </ul>
    </div>
    <div className="col-xl-6 mb-5">
        <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/kaArF7nRKbQ" allowfullscreen></iframe>
        </div>
    </div>
    </Row>
  </Container>

      


<Container>
<Row>
  <div className="col-12 mt-3">
  <h1 className="prototypeHeader">Prototype</h1>
  </div>
  </Row>
  <Row>
    <div className="col-12 mt-3">
    <div class="embed-responsive embed-responsive-16by9">
    <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlTMQsZWUR7Y57FRPdkBx2g%2FLMD-work%3Fnode-id%3D5%253A2787%26viewport%3D1219%252C20%252C0.3333852291107178%26scaling%3Dscale-down&chrome=DOCUMENTATION" allowFullScreen />
    </div>
    </div>
  </Row>
  </Container>


  <Container>
  <Row>
    <div className="col-12 mt-5">
    <h2 className="usabilityHeader">Usability Testing On Prototype App</h2>
    </div>
    </Row>
    <Row>
    <div className="col-xl-6 mb-5 mt-3">
      <h4 className="usabilitySubHeader">Delivering dummy parcels around London</h4>
      <p>Before starting the delivery pilot in London we wanted to make sure porters understood how the MVP app would work. We ran a usability test around Hackney Wick, delivering dummy parcels testing out the app  to filter out any immediate UX issues with the app.
      </p>
      <h4 className="usabilitySubHeader">Key Findings</h4>
      <ul className="usabilityList">
      <li>94% of tasks where complete succesfully, people where able to deliver and collect parcels. </li>
        <li>Copy of the app can be misleading and confusing to porters.</li>
        <li>Seeing the embeded map misleads users.</li>
        
      </ul>
    </div>
    <div className="col-xl-6 mb-5">
        <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ToAujFEx51c" allowfullscreen></iframe>
        </div>
    </div>
    </Row>
    <Row>
    <div className="col-12 mt-5">
      <h3 className="usabilityHeader">Usability Findings Deck</h3>
    </div>
    </Row>

    <Row>
    <div className="col-12 mt-3">
    <div class="embed-responsive embed-responsive-16by9">
    <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fei9zfrIrEN9SoAWb3jAsPT%2FLMD-Usability-Findings%3Fnode-id%3D49%253A0%26viewport%3D536%252C156%252C0.03257698565721512%26scaling%3Dscale-down&chrome=DOCUMENTATION" allowFullScreen />
    </div>
    </div>
  </Row>
  </Container>

  <Jumbotron className="takeawayJumbotron">
        <Container>
            <Row>
            
            <div className="col-lg-6 md-12">
              <h3 className ="takeawayHeaderCopy">Key Challenges Faced</h3>
              </div>
            </Row>
                <Row>
                  <div className="col-lg-4 col-md-4">
                     <hr className="takeawayLine mt-2 mb-4"></hr>
                  </div>
                </Row>
                <Row>
                <div className="col-lg-8 col-12">
                  <ul className="takeawayListStyle">
                    <li className="takeawayListText mt-2">Routing for the delivery drops was unoptimal and porters had to frequently walk back on themselves.
                    </li>
                    <li className="takeawayListText mt-3">Over 30 minutes of time was lost when porters where picking up new bags from the van driver.
                    </li>
                    <li className="takeawayListText mt-3">Adapting the app to have a contact free delivery experience during the pandemic added a few more steps to the delivery flow.
                    </li>
                  </ul>
                </div>
                </Row> 
        </Container>
        </Jumbotron>



        <Container>
        <Row>
          <div className="col-12 mt-5">
          <h2 className = "fieldResearchHeader">The Pandemic Changing Delivery </h2>
          </div>
          </Row>
          <Row>
          <div className="col-xl-12 mb-5 mt-3">
            <h4 className = "fieldResearchSubHeader">Contact Free Delivery</h4>
            <p className="fieldResearchBodyCopy">
              COVID has changed the delivery world completly. The way we deliver parcels has changed to limit as much contact as possible with customers.
            </p>
            <h4 className="fieldResearchSubHeader">Key Changes To The App</h4>
            <ul className="fieldResearchList">
              <li>Taking pictures for every delivery instead of signatures</li>
              <li className="mt-2">Sending emails instead of calling cards</li>
              <li className="mt-2">Record delivery demand.</li>
              <li className="mt-2">Leaving parcles at the door step instead of handing them over.</li>
            </ul>
          </div>
          <div className="col-xl-12 ml-4 mt-3 mb-5">
          <img className = "projectPicture" alt ="LMD metrics for success" src={iPhoneCamera} />
          </div>
          </Row>
        
          <Row>
          <div className="col">
           <h3 className="headerCopy mt-5 mb-4">Showcasing Impact</h3>
           <p className="impactCopy">To see how well the delivery pilot is going it's important to reflect on the data and stats of the pilot, to see how well things have improved. As months went on a lot of teething operation and app issues got solved, which allowed us to eventually reach our targets.  
           </p>

         </div>
         </Row>
        
         <Row className="mb-5">
         <div className="col-12">
         <img loading="lazy" className="finalSoloutionImage" alt ="Final soloution" src={DeliveriesPerHour} />
         </div>
         </Row>

        <Row className="mb-5">
         <div className="col-12">
         <img loading="lazy" className="finalSoloutionImage" alt ="Final soloution" src={DeliveryResults} />
         </div>
         </Row>

    </Container>

   


  <Jumbotron className="nextProjectHeader">
        <Container>
            <Row>
            
            <div className="col-lg-6 md-12">
              <h3 className ="nextProjectHeaderCopy">Next Project</h3>
              </div>
            </Row>
                <Row>
                <div className="col-lg-6 col-12">
                    <p className="nextProjectSubHeaderCopy">FordPass</p>
                </div>
                </Row> 
                <Row>
                <div className="col-12">
                    <LinkContainer to = "/RSA"> 
                    <Button className = "buttonStyling" variant="outline-light">View Project</Button>
                    </LinkContainer>
                </div>
                </Row>
        </Container>
        </Jumbotron>

      
      
</Styles>
)