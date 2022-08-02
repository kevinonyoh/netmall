const product = require("../models/productQueries")
const pool = require("../config/netMallDB")

exports.saveProduct = async (data) =>{
    try{
        const {name,price,quantity,url, cloudinary_id,description} = data
        await pool.query(product.addProduct,[name,price,quantity,url,cloudinary_id,description]);
        return "Product save Successfully"
    }catch(err){
        throw new Error(err)
    }
}

exports.findProduct = async () =>{
    try{
      const result = await pool.query(product.getProduct)
      return result.rows;
    }catch(err){
        throw new Error(err)
    }
}

exports.deleteProduct = async (data) =>{
    try{
        await pool.query(product.deleteProduct,[data])
        return "successful"
    }catch(err){
      throw new Error(err)
    }
}

exports.specificProduct = async (data) =>{
    try{
        let result = await pool.query(product.specialproduct,[data]);
       return result.rows
    }catch(err){
        throw new Error(err)
    }
}