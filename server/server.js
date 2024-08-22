const express = require("express");
const cors = require("cors");
const emailjs = require("@emailjs/nodejs");
require("dotenv").config();

const app = express();

app.use(cors({ origin: "https://to6ko.com" }));
app.use(express.json());

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const emailParams = {
    from_name: name,
    to_name: "todor",
    from_email: email,
    to_email: "raichev89@gmail.com",
    message: message,
  };

  emailjs
    .send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, emailParams, {
      publicKey: process.env.EMAILJS_PUBLIC_KEY,
      privateKey: process.env.EMAILJS_PRIVATE_KEY,
    })
    .then((response) => {
      console.log("email sent successfully", response.status, response.text);
      res.status(200).json({ success: true, message: "Message sent successfully!" });
    })
    .catch((error) => {
      console.log("failed to send email", error);
      res.status(500).json({ success: false, message: "Failed to send message. Please try again." });
    });
});

app.listen(8080, () => console.log("Server is running on port 8080"));
