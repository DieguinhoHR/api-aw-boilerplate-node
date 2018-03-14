const express = require('express')
const bodyParser = require('body-parser')

require('dotenv').config() // allows access to the environment variables

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./app/controllers/index')(app)

const PORT = process.env.APP_PORT || 3000;
 
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
