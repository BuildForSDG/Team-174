const router = require('express').Router();

router.route('/animals')
  .get((req, res) => {
    res.json('animals');
  });
module.exports = router;
