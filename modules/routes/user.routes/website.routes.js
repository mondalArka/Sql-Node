const express=require('express')
const route=express.Router()
const cont =require('../../controller/usercont')


route.get('/',cont.home)
route.get('/text',cont.text)
route.get('/about',cont.about)

module.exports=route