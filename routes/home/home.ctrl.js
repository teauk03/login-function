"use strict";

const RIndex = (req, res) => {
  res.render("home/index");
};

const RLogin = (req, res) => {
  res.render("home/login");
};

module.exports = {
  RIndex,
  RLogin,
};