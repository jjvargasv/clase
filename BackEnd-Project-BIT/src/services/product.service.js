const ProductModel = require( '../models/Products.js' );


const insertProduct = async ( product ) => {
    return await ProductModel.create( product );
}

const getAllProducts = async () => {
    return await ProductModel.find({});
}

const getProductByID = async ( productId ) => {
    return await ProductModel.findOne({ _id: productId }, {
        userId: 0,
        createdAt: 0,
        updatedAt: 0,
        __v: 0
    });
}

const getProductByUserID = async ( userId ) => {
    return await ProductModel.find({ userId }, {
        userId: 0,
        createdAt: 0,
        updatedAt: 0,
        __v: 0
    });
}

const removeProductByID = async ( productId ) => {
    return await ProductModel.findOneAndRemove({ _id: productId });
}

const updateProductByID = async ( productId, updateProduct ) => {
    return await ProductModel.findOneAndUpdate( 
        { _id: productId },     // Id del documento que deseamos actualizar
        updateProduct,          // El documento por el que vamos a actualizar 
        { new: true }           // Configuracion para el comando Update
    );
}


module.exports = {
    insertProduct,
    getAllProducts,
    getProductByID,
    removeProductByID,
    updateProductByID,
    getProductByUserID
}