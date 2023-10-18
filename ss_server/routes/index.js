var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: '' });
});

module.exports = router;

const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
/*locations page*/
router.get('/',ctrlLocations.homelist);
router.get('/login',ctrlLocations.login);
router.get('/registeration',ctrlLocations.register);
router.get('/game',ctrlLocations.gaming);

/*others page*/
router.get('/about',ctrlOthers.about);
router.get('/new_seasons',ctrlOthers.New_Seasons);
module.exports = router;