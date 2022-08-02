const productService = require("../services/productServices");


exports.getHome = async (req,res,next) =>{
  try{
    let result = await productService.findProduct();
     res.render("../views/home",{data: result});
  }catch(err){
    next(err)
  }
}

exports.getAproduct = async (req,res,next) => {
  try{
     let data = req.params.id;
    let result = await productService.specificProduct(data);
     res.render("../views/item-page",{data: result})
  }catch(err){
    next(err)
  }
}


