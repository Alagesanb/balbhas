const express = require('express');
const AccountController = require('../controllers/account.controller');
const router = express.Router();
router.post('/', AccountController.account);

// router.route('/account').post((req, res, next) => {
//   console.log(req.body);
//     AccountController.account(req.body, (error, data) => {
//       if (error) {
//         return next(error)
//       } else {
//         res.json(data)
//       }
//     })
// });


module.exports = router;