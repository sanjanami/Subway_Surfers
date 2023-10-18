var express = require('express');
var router = express.Router();
var ctrlLogin = require('../controllers/login');
var ctrlRegister = require('../controllers/register');

router.post('/login', ctrlLogin.tyretypesCreate);
router.get('/login/:locationid', ctrlLogin.tyretypesReadOne);
router.put('/login/:locationid', ctrlLogin.tyretypesUpdateOne);
router.delete('/login/:locationid', ctrlLogin.tyretypesDeleteOne);

router.post('/register', ctrlRegister.sparepartsCreate);
router.get('/register/:locationid', ctrlRegister.sparepartsReadOne);
router.put('/register/:locationid', ctrlRegister.sparepartsUpdateOne);
router.delete('/register/:locationid', ctrlRegister.sparepartsDeleteOne);

module.exports = router;