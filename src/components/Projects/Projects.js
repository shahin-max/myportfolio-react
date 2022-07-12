import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import kbc from "../../Assets/Projects/kbc.jpg";
import dictionary from "../../Assets/Projects/dictionary.jpg";
import currency from "../../Assets/Projects/currency.jpg";
import todolist from "../../Assets/Projects/todolist.jpg";
import temp from "../../Assets/Projects/temp.jpg";
import weather from "../../Assets/Projects/weather.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kbc}
              isBlog={false}
              title="Koun Banega Karorpati game"
              description="” What is Kaun Banega Crorepati?

           Kaun Banega Crorepati (also simply known as KBC) is a game show which i implemented as a web page game for fun.
           It is the fun time adaptation of the Who Wants to Be a Millionaire?
           Basic T&Cs”:

Following are the terms that shall be applicable to the Activity:

1 ,The Activity is open only to Indian citizens, residing in India. Citizens and/or residents of countries other than India are not eligible to participate. Citizens and/or residents of countries other than India residing in India arenot eligible to participate.

2, The Participants must be adults having attained the age of eighteen (18) years to participate in the Activity as on
the date of the Activity. There are more rules to pl;ay this game."
              link="https://kind-noether-ba8cd4.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dictionary}
              isBlog={false}
              title="Dictionary app"
              description="Kids Definition of dictionary. 1 : a book giving the meaning and usually the pronunciation of words listed in alphabetical order. 
              2 : a reference book explaining words of a particular subject listed in alphabetical order a medical dictionary.
              Meaning of dictionary in English. a book that contains a list of words in alphabetical order and explains their meanings, or gives a word for them in another language; 
              an electronic product giving similar information on a computer, smartphone, etc.:So this app completely build using javascript,html,and css.This app build using a dictionary api."
              link="https://shahin-max.github.io/dictionary/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              isBlog={false}
              title="Currency Converter"
              description=" Currency converter app developerd using javascript and html css.which converts one currency value ito another currency.Currencies are the very important corner that we need permanently and as a continuous and most of the time you want to meet any desire for you or the acquisition of something to satisfy your desires and every commodity you want to acquire its own price, not every commodity as the other may be the price is high or low.

The currency is different for each country due to the economic situation of the state there will never be asymmetry in currencies.Some times if we want to convert indian to any ype currency this app will help."
              link="https://shahin-max.github.io/currency-converter/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Prediction"
              description="Weather Prediction build with React.js and Css which takes the content from web api files and renders it using React.js. 
              weather forecasting, the prediction of the weather through application of the principles of physics, supplemented by a variety of statistical and empirical techniques. In addition to predictions of atmospheric phenomena themselves, 
              it includes predictions of changes on Earth’s surface caused by atmospheric conditions"
              link="https://shahin-max.github.io/weather-react/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="To-Do-List"
              description="This TO-Do-List is build by javascript frame work reactjs .Using Your To-Do List you can perform here all CRUD operations.Creating a task and editing updating and deleting task. To use your list, simply work your way through it in order, dealing with the A priority tasks first,
               then the Bs, then the Cs, and so on. As you complete tasks, tick them off or strike them through.
"
              link="https://shahin-max.github.io/todolist/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={temp}
              isBlog={false}
              title="Temparature-converter"
              description="This app build with javascript and html css.A temperature converter helps convert the temperature between Fahrenheit and Celsius scale. Temperature is measured using a thermometer. 
              While Kelvin (K) is the SI unit of temperature, people generally use Centigrade or Celsius (°C) and Fahrenheit (°F) to measure temperature.emperature conversion formulas are defined as the conversion formulas for changing the value of temperature from one unit to another.
               They are various distinct temperature conversion methods.."
              link="https://shahin-max.github.io/temp-convert/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
