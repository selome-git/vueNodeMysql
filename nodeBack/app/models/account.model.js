module.exports=( sequelize , Sequelize ) =>{

    const Account = sequelize.define("account", {
        fname:{
            type: Sequelize.STRING
        },

        lname:{
            type: Sequelize.STRING
        },

        username:{
            type: Sequelize.STRING
        },

        email:{
            type: Sequelize.STRING
        },

        phone:{
            type: Sequelize.STRING
        },

        pwd:{
            type: Sequelize.STRING
        },
        conPwd:{
            type: Sequelize.STRING
        },
    
    });
    return Account;
} ;