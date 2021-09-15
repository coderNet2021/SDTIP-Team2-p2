const express = require("express");
const router = express.Router();

const Category = require("../models/Category");

router.post("/signup", (request, response) => {
  console.log("test here!");
  const signedUpUser = new Category({
    fullName: request.body.fullName,
    username: request.body.username,
    email: request.body.email,
    password: request.body.password,
  });
  signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
