const express= require('express');//for building REST-API ..app interface for get post  
const bodyParser=require('body-parser');//parse request and create req.ody
const cors=require('cors');//provides express middleware to enable CORS 

const app=express();

var corsOption={
    origin:'http://localhost:8081'
};

app.use(cors(corsOption));

app.use(bodyParser.json());//parses req. of content-type- application/json

app.use(bodyParser.urlencoded({extended:true}));//parses req of content-type application/xx-www-form-urlencoded



app.get("/", (req,res) => {

    res.json({message : " Backend is running :)"});
});

const db= require("./app/models");


db.sequelize.sync();

// db.sequelize.sync({force : true }).then(()=>{
//     console.log("Drop and re-sync db");
// });

require('./app/routes/account.routes')(app);

//set port,listens for req
const PORT =process.env.PORT || 8080; 

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT} `);

});


