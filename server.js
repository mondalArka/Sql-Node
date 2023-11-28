const express=require('express')
const mysql=require('mysql')
const app=express()
const path=require('path')
const user=require('./modules/routes/user.routes/website.routes')
const admin=require('./modules/admin/routes/admin_routes')
const port= process.env.PORT || 3000
const mongoose=require('mongoose')
const db=require('./config/database')

app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.set('views','views')
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'admincss')))

app.use(user)
app.use(admin)

    app.listen(port,()=>{
        console.log(`server is running at http://localhost:${port}`);
    })
    

// const DB="mongodb+srv://nodeClassjan:BrnrXRpwEfvb35kG@cluster0.4axmojt.mongodb.net/Final_Project"
// mongoose.connect(DB,({useNewUrlParser:true,useUnifiedTopology:true}))
// .then(result=>{
//     app.listen(port,()=>{
//         console.log("server Connected.......");
//         console.log(`server running http://localhost:${port}`);
//     })
// }).catch(err=>{
//     console.log(err);
// })