require('dotenv').config()

const config ={
    db :{
        host : "localhost",
        user: "root",
        password : process.env.MYSQLPASSWORD,
        database : "mysqllearning",
        connectTimeout : 60000
    },
    listPerPage : 10
}

module.exports = config;