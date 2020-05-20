
const db=require("../models");
const Account = db.accounts;
const Op= db.Sequelize.Op;

exports.create= ( req, res ) =>{//create and save acc

    //request valdation
if(!req.body.username){
console.log("request"+req.body.username+req.lname);
    res.status(400).send({
        message:"Cant be empty "
    });
    return;
}

//create acc
const account={
    id:req.body.id,
    fname: req.body.fname,
    lname: req.body.lname,
    username: req.body.username,
    email : req.body.email,
    phone : req.body.phone,
    pwd : req.body.pwd,
    conPwd: req.body.conPwd,
};
//save acc in DB

Account.create(account).then(data =>{
    res.send(data);
    console.log("Account information sent to DB :)");
}).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occured while creating account "
    });

});

};





exports.findOne= ( req , res )=>{

    console.log("reached at @auth");
const id=req.query.id;
const pwd=req.query.pwd;

//get account with provided id 
Account.findByPk(id).then(data =>{
    res.send(data);

}).catch(err => {

    res.status(500).send({
        message:
        
        err.message||" E R R O R  O C C U R E D "
    });
});

};




