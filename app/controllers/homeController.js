const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  return res.status(200).send({message: 'OK'})
})

module.exports = app => app.use('/api/v1', router)
