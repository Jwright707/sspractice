import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../templates/login.css";
import { SocialIcon } from "react-social-icons";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      namePerson: "",
      email: "",
      text: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { namePerson, email, text } = this.state;
    const form = await axios.post("/api/form", {
      namePerson,
      email,
      text
    });
  }

  render() {
    return (
      <div>
        <span className="contactinfo">
          <p className="listEmail">
            <b>Main Email: </b>
            <a href="mailto:jzwright@ucdavis.edu">jzwright@ucdavis.edu</a>
            <br />
            <b>Alt. Email: </b>
            <a href="mailto:Mr.Wright707@outlook.com">
              Mr.Wright707@outlook.com
            </a>
            <br />
            <b>Phone Number: </b> 707-548-2622
          </p>
        </span>

        <Form onSubmit={this.handleSubmit} className="contactPage">
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="name"
              id="namePerson"
              placeholder="Enter your name"
              name="namePerson"
              value={this.state.namePerson}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">E-Mail Address</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="text">Description</Label>
            <Input
              type="textarea"
              id="text"
              placeholder="Enter your Question"
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button color="success" className="button">
            Send
          </Button>
        </Form>
        <span className="socialIcons">
          <SocialIcon
            url="https://www.linkedin.com/in/joshua-wright-29089a94/"
            className="icon"
          />
          <SocialIcon url="https://github.com/Jwright707" className="icon" />
          <SocialIcon
            url="https://www.facebook.com/josh.wright.961"
            className="icon"
          />
        </span>
      </div>
    );
  }
}

export default Login;
