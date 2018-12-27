import React, { Component } from "react";
import "../templates/projects.css";
import tripQuest from "../pictures/tripQuestPic.PNG";
import personalW from "../pictures/personalW.PNG";

class Projects extends Component {
  render() {
    return (
      <div className="projectsPage">
        <h2 className="titles">Trip Quest</h2>
        <br />
        <p>
          <b>Developer Role: </b>Created and implemented React components in a
          web application.
          <br />
          <b>Project Description: </b> A web application designed for the
          intention of allowing users to create a quest and meetup or go on
          existing quests with others
        </p>
        <a
          href="https://polar-mesa-35819.herokuapp.com/"
          target="_blank"
          className="tripQuestHover"
        >
          <img src={tripQuest} className="tripQuest" />
        </a>
        <hr />
        <h2 className="titles">Autobiographical Website</h2>
        <br />
        <p>
          <b>Developer Role: </b>Designed and implemented a website containing
          personal and professional information about me.
          <br />
          <b>Project Description: </b>
          An autobiographical web application designed by me for the intended
          purpose of demonstrating some of my programming capabilities and
          allowing people to view my personal/professional background.
        </p>
        <a
          href="https://jdwportfolio.herokuapp.com/"
          target="_blank"
          className="tripQuestHover"
        >
          <img src={personalW} className="tripQuest" />
        </a>
      </div>
    );
  }
}

export default Projects;
