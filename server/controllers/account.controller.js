const db = require("../models");
const Account = db.accounts;

// Create and Save a new Accounts
//const Account = require('../models/account.model');
exports.account = function (req, res) {
  const account = new Account({
    title: req.body.data.account_holder,
    body: req.body.data.accounttype,
    author: req.body.data.fathers_name,
    isPublished: req.body.data.isPublished
  });
  account.save()
    .then(function (createdPost) {
      return res.status(200).json({
        status: 200,
        data: createdPost,
        message: 'Success'
      });
    })
    .catch(function (err) {
      return res.status(400).json({
        status: 400,
        message: err.message
      });
    });
}

// Retrieve all Accounts from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Accounts with an id
exports.findOne = (req, res) => {
  
};

// Update a Accounts by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Accounts with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Accounts from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Accounts
exports.findAllPublished = (req, res) => {
  
};