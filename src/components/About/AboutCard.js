import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { HiAcademicCap } from "react-icons/hi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shahin Syed </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br />I am a <b className="purple"> M.Tech </b>graduated student speciliased in computer science & 
                 engineering under the affiliated colleges of JNTUA university.
                 I have published cloud based journal entitled 
                 <b className="purple"> A supportable semantic searching system by over encrypted data in public cloud </b>under 
                  International journal of Techno-Engineering(IJTE).
            <br />
            <br />
                My Successful Achievements
                <p><br/>
                  <ul>
                  <li className="about-activity">
                  <span className="purple"> <HiAcademicCap/></span>&nbsp;Received Momento for scoring 90% in my first B.Tech.</li>
                  <li className="about-activity">
                  <span className="purple"> <HiAcademicCap/></span>&nbsp; Received Prathiba Award & Gold Medal from JNTUA university for scoring top in my B.Tech.</li>
                  <li className="about-activity">
                  <span className="purple"> <HiAcademicCap/></span>&nbsp; Achieved NPTEL certificate with silver badge for consolidated scoring in Software Testing.</li>
                  </ul>
                </p>
              <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
            <span className="purple">  <ImPointRight /></span> Web Surfing
            </li>
            <li className="about-activity">
            <span className="purple">  <ImPointRight /></span>  Cooking
            </li>
            <li className="about-activity">
            <span className="purple">  <ImPointRight /></span>  Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Keep chasing your Goals at peak!"{" "}
          </p>
          <footer className="blockquote-footer">Shahin Syed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
