const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/validatorServiceRoutes.js'); 

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Use the routes defined in routes.js
app.use('/', routes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
