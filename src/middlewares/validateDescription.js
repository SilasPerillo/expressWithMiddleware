const fnValidadeDescription = (descriptionValue, res, value) => {
  if(!descriptionValue) {
    return res.status(400).json({ message: `O campo ${value} é obrigatório` })
  }
}

module.exports = (req, res, next) => {
  const { description } = req.body;

  return fnValidadeDescription(description, res, 'description')
  || fnValidadeDescription(description.createdAt, res, 'createdAt')
  || fnValidadeDescription(description.rating, res, 'rating')
  || fnValidadeDescription(description.difficulty, res, 'difficulty')
  || next();
}