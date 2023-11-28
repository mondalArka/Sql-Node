const express=require('express')
const route=express.Router()
const cont =require('../controller/admin_controller')

const fs=require('fs')
const multer = require('multer')
const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./public/uploads')
    },
    filename:(req,file,callback)=>{
        callback(null,Date.now()+"_"+file.originalname)
}
})

const uploadFile=multer({storage:storage})
const request_param=multer()



route.get('/admin',cont.dashboard)

//slider page
route.get('/admin/slider',cont.slider)
route.get('/admin/category',request_param.any(),cont.category)
route.get('/admin/products',cont.products)
//active deactive slider images
route.get('/admin/deactiveabout/:id',cont.deactivate)
route.get('/admin/activeabout/:id',cont.activate)

//delete slider
route.get('/admin/delete/:id',cont.deleted)

//add about

route.get('/admin/createabout',cont.createAbout)
route.post('/admin/addabout',uploadFile.any(),cont.addabout)

// category
route.get('/admin/activecategory/:id',cont.activeCategory)
route.get('/admin/deactivecategory/:id',cont.deactiveCategory)
route.get('/admin/deletecategory/:id',cont.deleteCategory)
route.get('/admin/createcategory',cont.createCategory)
route.post('/admin/addcategory',request_param.any(),cont.addcategory)

//products
route.get('/admin/activeproduct/:id',cont.activeProduct)
route.get('/admin/deactiveproduct/:id',cont.deactiveProduct)
route.get('/admin/deleteproduct/:id',cont.deleteProduct)
route.get('/admin/createproduct',cont.createProduct)
route.post('/admin/addproduct',uploadFile.any(),cont.addProduct)


//popular product
route.get('/admin/pupular_product',cont.popularProduct)
route.get('/admin/deactivepopular/:id',cont.deactivePopular)
route.get('/admin/activepopular/:id',cont.activePopular)
route.get('/admin/deletepopular/:id',cont.deletePopular)
route.get('/admin/createpopular',cont.createPopular)
route.post('/admin/addpopular',uploadFile.any(),cont.addPopular)

//about shop
route.get('/admin/about_shop',cont.aboutShop)
route.get('/admin/deactiveabout_shop/:id',cont.deactiveaboutShop)
route.get('/admin/activeabout_shop/:id',cont.activeaboutShop)
route.get('/admin/deleteabout_shop/:id',cont.deleteaboutShop)
route.get('/admin/createabout_shop',cont.createaboutShop)
route.post('/admin/addabout_shop',request_param.any(),cont.addaboutShop)

//dashboard
route.get('/admin/dashboard',cont.dashboard)
module.exports=route