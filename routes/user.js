// NPM MODULES
const express = require("express");

// LOCAL MODULES
const { UserService } = require("../services/user");

// ROUTE FUNCTIONS
const createUser = (request, response) => {
  const {
    first_name,
    last_name,
    email,
    firebase_token,
    avatar_url,
    income
  } = request.body;
  UserService.createUser(
    first_name,
    last_name,
    email,
    firebase_token,
    avatar_url,
    income
  )
    .then(data => {
      response.status(200).json({
        msg: `Successfully created user.`,
        data
      });
    })
    .catch(e => {
      response.status(400).json({
        msg: `Something went wrong`,
        e
      });
    });
};

const getUser = (request, response) => {
  const { id } = request.params;
  UserService.getUser(id)
    .then(data => {
      response.status(200).json({
<<<<<<< HEAD
        msg: `Successfully retrieved data from user #${user_id}`,
=======
        msg: `Successfully retrieved data from user #${id}`,
>>>>>>> master
        data
      });
    })
    .catch(e => {
      response.status(400).json({
        msg: `Something went wrong`,
        e
      });
    });
};
<<<<<<< HEAD

=======
const getUserByEmail = (request,response)=>{
  const {email} = req.params;
  UserService.getUserByEmail(email)
  .then(data=>{
    response.status(200).json({
      msg: `Successfully retreived data for email ${email}`,
      data
    })
  })
    .catch(e=>{
      response.status(400).json({
        msg:`Something went wrong`,
        e
      })
    })
  
}
>>>>>>> master
const updateUser = (request, response) => {
  const {
    first_name,
    last_name,
    email,
    firebase_token,
    avatar_url,
    income,
    id
  } = request.body;
  UserService.updateUser(
    first_name,
    last_name,
    email,
    firebase_token,
    avatar_url,
<<<<<<< HEAD
    income
=======
    income,
    id
>>>>>>> master
  )
    .then(data => {
      response.status(200).json({
        msg: `Successfully updated user.`,
        data
      });
    })
    .catch(e => {
      response.status(400).json({
        msg: `Something went wrong`,
        e
      });
    });
};

const deleteUser = (request, response) => {
  const { id } = request.body;
  UserService.deleteUser(id)
    .then(data => {
      response.status(200).json({
        msg: `Successfully deleted user.`,
        data
      });
    })
    .catch(e => {
      response.status(400).json({
        msg: `Something went wrong`,
        e
      });
    });
};

// FUNCTION THAT RETURNS ROUTER
const UserRouter = () => {
  const router = express.Router();

  router.post("/", createUser);
  router.get("/:id", getUser);
<<<<<<< HEAD
=======
  router.get("/email/:email",getUserByEmail);
>>>>>>> master
  router.put("/", updateUser);
  router.delete("/", deleteUser);

  return router;
};

module.exports = {
  UserRouter
};
