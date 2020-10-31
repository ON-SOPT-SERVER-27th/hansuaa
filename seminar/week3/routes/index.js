var express = require('express');
var router = express.Router();

router.use('/users', require('./users'));
router.use('/ranking', require('./ranking'));
router.use('/society', require('./society'));
router.use('/members', require('./members'));


/* GET home page. */
// 여기는 지워도 상관 없음
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
