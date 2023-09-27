const express = require('express');
const ValidatorServiceController = require('../controller/ValidatorServiceController');

const router = express.Router();

// Define routes
router.get('/generate-token', (req, res) => {
  const availableDigits = req.query.availableDigits;
  const token = ValidatorServiceController.generateToken(availableDigits);
  res.json({ token });
});

router.post('/validate-token', (req, res) => {
  const { token } = req.body;
  const isValid = ValidatorServiceController.isTokenValid(token);
  res.json({ isValid });
});

module.exports = router;
