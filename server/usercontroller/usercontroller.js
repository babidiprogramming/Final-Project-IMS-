
const Item = require('../dbmodel/item');
const mongoose = require('mongoose');


//-------------------------HOME PAGE---------------
exports.homepage = async (req, res) =>{

    const message = await req.flash('info');

    const locals = {
        title: 'IMS',
        description : 'Inventory Management System'
      }

      try{
          const infoitems = await Item.find({}).limit(10);
          res.render('index', {locals ,message, infoitems});
      }
      catch(error){
        console.log(error);
      }
    
      
}
/**
 * GET /
 * About Page
 * 
 */
exports.aboutpage = async (req, res) =>{

  const message = await req.flash('info');

  const locals = {
      title: 'About',
      description : 'Inventory Management System'
    }

    try{
        const infoitems = await Item.find({}).limit(10);
        res.render('about', {locals ,message, infoitems});
    }
    catch(error){
      console.log(error);
    }
  
    
}

/**
 * GET /
 * New Item Page
 * 
 */
exports.addNewitem = async (req, res) =>{
  const locals = {
      title: 'Add New Item - IMS',
      description : 'Add Newitem'
    }
    res.render('user/add', locals);
}

/**
 * POST /
 * ADD New Item Page
 * 
 */
exports.postNewitem = async (req, res) =>{
  console.log(req.body);
  const newItem = new Item({
    name: req.body.itemname,
    category: req.body.category,
    quantity: req.body.quantiy,
    price: req.body.price,
    description: req.body.descriptionname

});
try{
  await Item.create(newItem);
  await req.flash('info', 'New item created successfully.');
  res.redirect('/');

}catch(error){
  console.log(error);
} 
}

/**
 * GET /
 * DISPLAY Item Data
 * 
 */
exports.viewitem = async (req, res) => {
  try{
      const Viewitem = await Item.findOne({_id: req.params.id})
      const locals = {
        title: 'View Item Data - IMS',
        description : 'View Item'
      };
      res.render('user/view', {
        locals, Viewitem
      });
  }catch(error){
    console.log(error);
  }
}

/**
 * GET /
 * Edit Data
 * 
 */
exports.updateitem = async (req, res) => {
  try{
      const Updateitem = await Item.findOne({_id: req.params.id})
      const locals = {
        title: 'Update Item Data - IMS',
        description : 'Update Item'
      };
      res.render('user/edit', {
        locals, Updateitem
      });
  }catch(error){
    console.log(error);
  }
}

/**
 * GET /
 * UPDATE record Data
 * 
 */
exports.updatepost = async (req, res) => {
  try {
    await Item.findByIdAndUpdate(req.params.id,{
      name: req.body.itemname,
      category: req.body.category,
      quantity: req.body.quantiy,
      price: req.body.price,
      description: req.body.descriptionname,
      createdAt: Date.now()
    })
    await req.flash('info', 'Item updated successfully.');
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
}

/**
 * DELETE /
 * DELETE record Data
 * 
 */
exports.deleteitem = async (req, res) => {
try {
  await Item.deleteOne({_id: req.params.id});
  await req.flash('info', 'Item deleted successfully.');
  res.redirect("/")
} catch (error) {
  console.log(error);
}
}

/**
 * GET /
 * SEARCH record Data
 * 
 */
exports.searchitem = async (req, res) => {
  const locals = {
    title: 'Search Item - IMS',
    description : 'Search item'
  }

  try {
    let searchItem = req.body.searchItem;
    const searchNoSpeciaclChar = searchItem.replace(/[^a-zA-Z0-9]/g, "");
    const item = await Item.find({
      $or: [
        { name: {$regex: new RegExp(searchNoSpeciaclChar, "i") }},
        { category: {$regex: new RegExp(searchNoSpeciaclChar, "i") }},
      ]
    });
    res.render("search",{item,locals});
  } catch (error) {
    console.log(error);
  }
  }