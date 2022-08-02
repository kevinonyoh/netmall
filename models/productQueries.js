const  getProduct = "SELECT * FROM product";
const  addProduct = "INSERT INTO product (name,price,quantity,url,cloudinary_id,description) VAlUES ($1, $2, $3,$4,$5,$6)";
const deleteProduct = "DELETE FROM product WHERE cloudinary_id = $1"; 
const specialproduct = "SELECT * FROM product WHERE cloudinary_id = $1";


module.exports = {
    getProduct,
    addProduct,
    deleteProduct,
    specialproduct
}