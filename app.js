const addDays = require("date-fns/addDays");

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const dateAfterAdding100Days = addDays(new Date(), 100);
  const updatedDate = `${dateAfterAdding100Days.getDate()}/${
    dateAfterAdding100Days.getMonth() + 1
  }/${dateAfterAdding100Days.getFullYear()}`;
  response.send(updatedDate);
});

module.exports = app;
