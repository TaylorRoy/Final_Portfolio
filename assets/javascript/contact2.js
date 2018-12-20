require("dotenv").config();

var Sendgrid = require('node-spotify-api');
var keys = require("../../keys");

var sendgrid = new Sendgrid(keys.sendgrid);

    $(document).ready(function () {
      document.getElementById("contact-submit").onclick = function () {
        //get input ids and create object
        let contactData = {
          first_name: $("#inputFirstName").val().trim(),
          last_name: $("#inputLastName").val().trim(),
          phone: $("#inputPhoneNumber").val().trim(),
          email: $("#inputEmail").val().trim(),
          message: $("#inputMessage").val().trim()
        }

        $.post("/api/contactEmail", contactData)
          .then(function (data) {
            console.log("add.html", data);
          });
      }
    });