import React, { Component } from "react";
import "../templates/attachments.css";
import transcriptPic from "../pictures/transcriptPic.PNG";
import resumePic from "../pictures/resumePic.PNG";
import coverLetterPic from "../pictures/coverLetterPic.PNG";
import personalRPic from "../pictures/prPic.PNG";
import transcript from "../pictures/UCD_Transcript.PNG";
import resume from "../pictures/Resume(CS).docx";
import personalR from "../pictures/Personal References.rtf";
import coverLetter from "../pictures/Cover Letter (Main).rtf";

class attachments extends Component {
  render() {
    return (
      <div className="attachmentsPage">
        <p className="atch1">
          UC Davis Transcript
          <br />
          <a href={transcript} target="_blank">
            <img src={transcriptPic} className="pi" />
          </a>
          <br />
          <a href={transcript} download className="downloadlink">
            Download
          </a>
        </p>
        <p className="atch2">
          Resume
          <br />
          <a href={resumePic} target="_blank">
            <img src={resumePic} className="pi" />
          </a>
          <br />
          <a href={resume} download className="downloadlink">
            Download
          </a>
        </p>
        <p className="atch3">
          Personal References
          <br />
          <a href={personalRPic} target="_blank">
            <img src={personalRPic} className="pi" />
          </a>
          <br />
          <a href={personalR} download className="downloadlink">
            Download
          </a>
        </p>
        <p className="atch4">
          Cover Letter
          <br />
          <a href={coverLetterPic} target="_blank">
            <img src={coverLetterPic} className="pi" />
          </a>
          <br />
          <a href={coverLetter} download className="downloadlink">
            Download
          </a>
        </p>
      </div>
    );
  }
}

export default attachments;
