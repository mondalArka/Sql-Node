const mysql=require('mysql')

var dbConnection=mysql.createPool({
    host:'localhost',
    user:"root",
    password:"",
    database:'tasty'
    })
    
    
    dbConnection.getConnection((err)=>{
        if(err){
            console.log(err);     
        }
    
            console.log("Connected");
        })


        module.exports=dbConnection