
module.exports= app =>{
const accounts= require('../controllers/account.controller.js');

    const router=require("express").Router();

    //create new account
   router.post("/",accounts.create);

    router.post("/signup",accounts.create);

    router.get("/",accounts.findOne);

      router.get("/:id",accounts.findOne);

    app.use('/api/accounts', router);//what we use inPostman..commonn

};