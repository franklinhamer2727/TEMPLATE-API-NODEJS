var  Router = require('express');
var router = new Router();

var UserDAO = require('../Controllers/User.controller');
//api/user

router.get('/',UserDAO.getAllUsers);
router.get('/:id',UserDAO.getOne);
router.post('/',UserDAO.createUser);
router.delete('/',UserDAO.deleteUser);
router.put('/',UserDAO.updateUser);



module.exports= router;