const productService = require("../services/productServices");
const cloudinary = require("../config/cloudinary");


exports.getAdminUpload = async (req,res,next) =>{
    try{
        res.render("../views/admin-upload");
    }catch(err){
        next(err);
    }
}

exports.postAdminUpload = async (req,res,next) =>{
    try{
     const result = await cloudinary.uploader.upload(req.file.path);
       const {name=name.trim(),price,quantity,description=description.trim()} = req.body;
         let data = {
            name,
            price,
            quantity,
            url: result.secure_url,
            cloudinary_id: result.public_id,
            description
         }
         let success = await productService.saveProduct(data)
         res.redirect(`/admin-upload?${success}`)
    }catch(err){
        next(err)
    }
}

exports.getAdminDeleteProduct = async (req,res,next) =>{
 try{
    let result = await productService.findProduct();
    res.render("../views/admin-delete",{data: result})
 }catch(err){
    next(err)
 }
}


exports.postAdminDeleteProduct = async (req,res,next) =>{
    try{
       let item = req.body.deleteItem
       await cloudinary.uploader.destroy(item);
       let result = await productService.deleteProduct(item);
       res.redirect("/admin-delete");
    }catch(err){
       next(err)
    }
   }