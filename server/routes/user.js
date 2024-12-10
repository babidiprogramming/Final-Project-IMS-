
//USER ROUTE
const express =require ('express');
const router = express.Router();
const userController = require('../usercontroller/usercontroller');

//GET HOME PAGE
router.get('/', userController.homepage);

//ABOUT PAGE
router.get('/about', userController.aboutpage);

//NEW ITEMS
router.get('/add', userController.addNewitem);
router.post('/add', userController.postNewitem);

// VIEW ITEMS
router.get('/view/:id', userController.viewitem);

//UPDATE ITEMS
router.get('/edit/:id', userController.updateitem);
router.put('/edit/:id', userController.updatepost);

//DELETE ITEMS
router.delete('/edit/:id', userController.deleteitem);
//SEARCH ITEMS
router.post('/search', userController.searchitem);

module.exports = router;

