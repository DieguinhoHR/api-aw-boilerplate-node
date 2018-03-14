const PORT = process.env.APP_PORT || 3000;

require('dotenv').config() // allows access to the environment variables

module.exports = app => {   
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}