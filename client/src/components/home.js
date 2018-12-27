import React, { Component } from "react";
import "../templates/home.css";
import pic from "../pictures/jwpic.PNG";

class Home extends Component {
  render() {
    return (
      <div>
        <h1> Who am I? </h1>
        <span className="container">
          <p className="item1">
            My name is Joshua Wright and I am a full-time student at the
            University of California, Davis. I am working towards a Bachelor of
            Science in Computer Science and a minor in Economics. My main focus
            and inspiration for my studies is web development and full-stack
            development. I am very passionate about Software Development, and I
            strive to better myself as a developer by constantly learning and
            programming in my free time.
          </p>
          <img src={pic} className="pic" alt="joshua_wright" />
          <span className="item2">
            <hr />
            <h2>Skills</h2>
            <p className="skills">
              <b>Productive: </b> Python, R, HTML, CSS
              <br />
              <b>Familiar: </b> C++, JavaScript, ReactJS, Django, SQL
              <br />
              <b>Software Development: </b> Git/Github, Heroku
              <br />
              <b>Quantitative: </b> Probability, Multivariable Calculus, Linear
              Algebra, Discrete Math
            </p>
          </span>
        </span>
      </div>
    );
  }
}

export default Home;
