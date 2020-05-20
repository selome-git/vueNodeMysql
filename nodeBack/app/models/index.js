const dbConfig= require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize= new Sequelize('nodejs-vue', 'root', '', {

    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    operatorsAliases:false,

    pool:{

        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.idle,
    }
});

const db={};

db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.accounts = require('./account.model.js')(sequelize,Sequelize);

module.exports= db;

