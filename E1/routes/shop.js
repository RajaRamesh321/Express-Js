const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('shop home page')
})
module.exports = router