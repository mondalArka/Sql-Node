const adminRepo = require("../repositories/admin.repository")

class admincontroller {
    constructor() { }

   async dashboard(req, res) {
        try {
            const slider=await adminRepo.getImage(req,res)
            const category=await adminRepo.getCategory(req,res)
            const newProducts=await adminRepo.getProduct(req,res)
            const popularProducts=await adminRepo.getPopularProduct(req,res)
            const about=await adminRepo.getAboutShop(req,res)
            res.render('../modules/admin/views/dashboard',{
                slider:slider,
                category:category,
                newProducts:newProducts,
                popularProducts:popularProducts,
                about:about
            })
        } catch (err) {
            console.log(err);
        }
    }
    async slider(req, res) {
        try {
            const slider = await adminRepo.getImage(req, res)
            res.render('../modules/admin/views/slider', {
                slider: slider
            })
        } catch (err) {
            console.log(err);
            res.redirect('/admin')
        }
    }
    async deactivate(req, res) {
        try {
            const id = req.params.id
            const status = await adminRepo.getImageCondition(id)
            console.log(status[0].status, 'status');
            if (status[0].status == 1) {
                const deactive = await adminRepo.deactivate(id)
                res.redirect('/admin/slider')
            } else {
                console.log('already deactive');
                res.redirect('/admin/slider')
            }
        } catch (err) {
            console.log(err);
            res.redirect('/admin/slider')
        }
    }


    async activate(req, res) {
        try {
            const id = req.params.id
            const status = await adminRepo.getImageCondition(id)
            console.log(status[0].status, 'status');
            if (status[0].status == 0) {
                const active = await adminRepo.activate(id)
                res.redirect('/admin/slider')
            } else {
                console.log('already active');
                res.redirect('/admin/slider')
            }
        } catch (err) {
            console.log(err);
            res.redirect('/admin/slider')
        }
    }

    async createAbout(req, res) {
        try {
            res.render('../modules/admin/views/addabout')
        } catch (err) {
            console.log(err);
            res.redirect('/admin/slider')
        }

    }
    async addabout(req, res) {
        try {
            console.log(req.files);
            if (req.files) {

                const insert = await adminRepo.insertSlider(req.files[0].filename)
                res.redirect('/admin/slider')
            }
        } catch (err) {
            console.log(err);
            res.redirect('/admin/slider')
        }
    }

    async category(req, res) {
        try {
            const category = await adminRepo.getCategory(req, res)
            res.render('../modules/admin/views/category', {
                category: category
            })

        } catch (err) {
            console.log(err);
            res.redirect('/admin')
        }
    }

    async deleted(req, res) {
        try {
            const id = req.params.id
            const deleted = await adminRepo.deleteSlider(id)
            res.redirect('/admin/slider')
        } catch (err) {
            console.log(err);
            res.redirect('/admin/slider')
        }

    }

    async activeCategory(req, res) {
        try {
            const id = req.params.id
            const active = await adminRepo.activeCategory(id)
            res.redirect('/admin/category')
        } catch (err) {
            console.log(err);
            res.redirect('/admin/category')
        }
    }

    async deactiveCategory(req, res) {
        try {
            const id = req.params.id
            const active = await adminRepo.deactiveCategory(id)
            res.redirect('/admin/category')
        } catch (err) {
            console.log(err);
            res.redirect('/admin/category')
        }
    }

    async deleteCategory(req, res) {
        try {
            console.log(id);
            const deleted = await adminRepo.deleteCategory(id)
            res.redirect('/admin/category')
        } catch (err) {
            console.log(err);
            res.redirect('/admin/category')
        }
    }

    async createCategory(req, res) {
        try {
            res.render("../modules/admin/views/addcategory")
        } catch (err) {
            console.log(err);
            res.redirect('/admin/category')
        }
    }

    async addcategory(req, res) {
        try {
            console.log(req.body);
            const add = await adminRepo.insertCategory(req, res)
            res.redirect('/admin/category')

        } catch (err) {
            console.log(err);
            res.redirect('/admin/category')
        }
    }

    async products(req, res) {
        try {
            const products = await adminRepo.getProduct(req, res)
            res.render('../modules/admin/views/product', {
                product: products
            })
        } catch (err) {
            console.log(err);
        }
    }

    async activeProduct(req,res){
        try{
            const id =req.params.id
            const active=await adminRepo.activePoduct(id)
           res.redirect('/admin/products')
        }catch(err){
            console.log(err);
            res.redirect('/admin/products')
        }
    }

    async deactiveProduct(req,res){
        try{
            const id =req.params.id
            const active=await adminRepo.deactivePoduct(id)
           res.redirect('/admin/products')
        }catch(err){
            console.log(err);
            res.redirect('/admin/products')
        }
    }

    async deleteProduct(req,res){
        try{
            const id=req.params.id
            const deleted=await adminRepo.deleteProduct(id)
            res.redirect('/admin/products')
        }catch(err){
            console.log(err);
            res.redirect('/admin/products')
        }
    }

    async createProduct(req,res){
        try{
            res.render('../modules/admin/views/addproduct')
        }catch(err){
            console.log(err);
            res.redirect('/admin/products')
        }
    }

    async addProduct(req,res){
        try{
            console.log(req.files,'files');
            const add=await adminRepo.insertProduct(req,res)
            res.redirect('/admin/products')
        }catch(err){
            console.log(err);
            res.redirect('/admin/products')
        }
    }

    async popularProduct(req,res){
        try{
            const popular_product=await adminRepo.getPopularProduct(req,res)
            res.render('../modules/admin/views/popular_product',{
                product:popular_product
            })
        }catch(err){
            console.log(err);
        }
    }

    async deactivePopular(req,res){
        try{
            const id =req.params.id
            const deactive= await adminRepo.deactivePopular(id)
            res.redirect('/admin/pupular_product')
        }catch(err){
            console.log(err);
            res.redirect('/admin/pupular_product')
        }
    }

    async activePopular(req,res){
        try{
            const id =req.params.id
            const deactive= await adminRepo.activePopular(id)
            res.redirect('/admin/pupular_product')
        }catch(err){
            console.log(err);
            res.redirect('/admin/pupular_product')
        }
    }

    async deletePopular(req,res){
        try{
            const id=req.params.id
            const deleted=await adminRepo.deletePopular(id)
            res.redirect('/admin/pupular_product')
        }catch(err){
            console.log(err);
            res.redirect('/admin/pupular_product')
        }
    }

    async createPopular(req,res){
        try{
            res.render('../modules/admin/views/addpopular_product')
        }catch(err){
            console.log(err);
            res.redirect('/admin/pupular_product')
        }
    }

    async addPopular(req,res){
        try{
            const add=await adminRepo.insertPopular(req,res)
            res.redirect('/admin/pupular_product')
        }catch(err){
            console.log(err);
            res.redirect('/admin/pupular_product')
        }
    }

    async aboutShop(req,res){
        try{
            const data=await adminRepo.getAboutShop(req,res)
            res.render('../modules/admin/views/about_shop',{
                about_shop:data
            })
        }catch(err){
            console.log(err);
        }
    }

    async deactiveaboutShop(req,res){
        try{
            const id = req.params.id
            const deactive=await adminRepo.deactiveAbout_Shop(id)
            res.redirect('/admin/about_shop')
        }catch(err){
            console.log(err);
            res.redirect('/admin/about_shop')
        }
    }

    async activeaboutShop(req,res){
        try{
            const id=req.params.id
            const active=await adminRepo.activeAbout_Shop(id)
            res.redirect('/admin/about_shop')
        }catch(err){
            console.log(err);
            res.redirect('/admin/about_shop')
        }
    }

    async deleteaboutShop(req,res){
        try{
            const id =req.params.id
            const deleted=await adminRepo.deleteAbout_Shop(id)
            res.redirect('/admin/about_shop')
        }catch(err){
            console.log(err);
            res.redirect('/admin/about_shop')
        }
    }

    async createaboutShop(req,res){
        try{
            res.render('../modules/admin/views/add_about_shop')
        }catch(err){
            console.log(err);
            res.redirect('/admin/about_shop')
        }
    }
    
    async addaboutShop(req,res){
        try{
            const add=await adminRepo.insertAboutShop(req,res)
            res.redirect('/admin/about_shop')
        }catch(err){
            console.log(err);
            res.redirect('/admin/about_shop')
        }
    }




}


module.exports = new admincontroller()