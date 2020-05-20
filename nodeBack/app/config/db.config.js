module.exports={

    HOST:"localhost",
    USER:"root",
    PASSWORD:"",
    DB:"nodejs-vue",
    dialect:"mysql",
    pool: {//[optional]
        max: 5,//max no of collection in pool
        min: 0,//min
        acquire: 30000,//max time conn. can be idle before being released
        idle: 10000//max time that pool will try to get conn. before throwing error

    }
};