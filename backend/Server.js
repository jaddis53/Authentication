const mysql=require('mysql')
const conn= mysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"hey"
});
conn.connect(function(err){
    if(err)
    throw err
console.log("successfully connected")

});