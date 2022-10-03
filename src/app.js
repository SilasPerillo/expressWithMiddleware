const express = require('express');

const app = express();

app.use(express.json());

const validadeName = (req, res, next) => {
  const { name } = req.body;

  if(!name) {
    return res.status(400).json({ "message": "O campo name é obrigatório" })
  }

  if(name.length < 4) {
    return res.status(400).json({ "message": "O campo name deve ter pelo menos 4 caracteres" })
  }

  next();
}

app.post('/activities',validadeName , (_req, res) => {
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
})

module.exports = app;