const express = require('express')
const router = express.Router()
const { extenseFormController } = require('../controllers/extenseFormController.js')
// const { inputValidationMiddleware } = require('../middlewares/inputValidationMiddleware.js')

router.get('/hola-node', (req, res) => {
  res.status(200).json({ message: 'hola' })
})
router.post('/evaluar-puntajes', (req, res) => {
  extenseFormController(req, res)
})


module.exports = router
