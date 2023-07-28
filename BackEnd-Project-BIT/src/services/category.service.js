const Category = require("../models/category")

const getCategories = async ()=>{
 return await Category.find({})
}
const insertCategory = async (category)=>{
    return await Category.create(category)
}
const reformCategory = async (categoryId, updateData)=>{
    return await Category.findOneAndUpdate(
        {_id: categoryId},
        updateData,
        {new: true}
        )
}
const removeCategory = async (categoryId)=>{
    return await Category.findOneAndRemove({_id: categoryId})
}

module.exports = {
    getCategories,
    insertCategory,
    reformCategory,
    removeCategory
}