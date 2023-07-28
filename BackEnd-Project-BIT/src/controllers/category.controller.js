
const {getCategories, insertCategory, removeCategory, reformCategory} = require('../services/category.service')
const getAllCategories = async(req , res)=>{
   try {
    const data = await getCategories()
    res.status(200).json({
        ok: true,
        path: '/categories',
        msg: 'obtener',
        categories: data
    })
   } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        path: '/categories',
        msg: 'error al obtener',
        
    })
   }
}
const createCategory = async(req , res)=>{
    const inputData = req.body;
  try {
    const data = await insertCategory(inputData);
    res.status(201).json({
        ok: true,
        path: '/categories',
        msg: 'obtener',
        category: data
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        path: '/categories',
        msg: 'error al crear',
        
    })
  }
}
const updateCategory = async(req , res)=>{
    const inputData = req.params.id;
    const dataBody = req.body;
    try {
        const data = await reformCategory(inputData, dataBody);
        res.status(201).json({
            ok: true,
            path: '/categories',
            msg: 'actualizar',
            category: data
        })
      } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            path: '/categories',
            msg: 'error al actualizar',
            
        })
      }
}
const deleteCategory = async(req , res)=>{
    const inputData = req.params.id;
   try {
    const data = await removeCategory(inputData);
    res.status(200).json({
        ok: true,
        path: '/categories',
        msg: 'elimina',
        category: data
    })
   } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        path: '/categories',
        msg: 'error al eliminar',
        
    })
   }
}

module.exports = {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
}