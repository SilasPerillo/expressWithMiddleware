const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const fnValidadeDescription = require('./middlewares/validateDescription');
const express = require('express');

const app = express();

app.use(express.json());

app.post('/activities',
  validateName,
  validatePrice,
  fnValidadeDescription,
  (_req, res) => {
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
})

module.exports = app;