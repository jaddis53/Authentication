const mysql=require('mysql')
const express=require('express')
const cors= require('cors')
const app= express();
app.use(cors())
app.use(express.json())
const db= mysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"",
    "database":"student_management_system"
});
app.post("/login", (req,res)=>{
    const sql="SELECT * FROM login WHERE username=? and password=?";
    db.query(sql,[req.body.email,req.body.password],(err,data)=>{
        if(err)
        {return res.json("Error");}
        if (data.length> 0){
        return res.json("Login successfully");
        }else{
            return res.json("No record");
        }
})
});

app.listen(8081, function(){
    console.log("Listening....")
})
db.connect(function(err){
    if(err)
    throw err
console.log("successfully connected")

});