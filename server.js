const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/form", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3> Contact Details</h3>
      <ul> Name: ${req.body.namePerson}</ul>
      <ul> Email: ${req.body.email}</ul>
      <h3> Message</h3>
      <p> ${req.body.text}</p>
      `;
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "cxs7mujikc24cxis@ethereal.email",
        pass: "R6yZrtR1zXb8m6gfnN"
      }
    });

    let mailOptions = {
      from: "test@testaccount.com",
      to: "cxs7mujikc24cxis@ethereal.email",
      replyTo: "test@testaccount.com",
      text: req.body.text,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("Message Sent: %s", info.text);
      console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
