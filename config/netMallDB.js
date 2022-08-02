const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

pool.connect()
.then(()=>{
    console.log("db connected successfully")
})
.catch((err)=>{
    console.log(err)
})

module.exports = pool