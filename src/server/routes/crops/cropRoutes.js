const router = require('express').Router();

router.route('/crops')
  .get((req, res) => {
    res.json('crops');
  });
module.exports = router;
