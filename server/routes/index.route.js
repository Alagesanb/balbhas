const express = require('express');
const accountRoutes = require('./account.route');
const router = express.Router();
router.get('/', function (req, res) {
  res.send('API works!');
});
router.use('/account', accountRoutes);
module.exports = router;