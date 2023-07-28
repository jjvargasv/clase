const { Router } = require( 'express' );
const { getAllCategories, createCategory, updateCategory, deleteCategory } = require('../controllers/category.controller');

const router = Router();

router.get( '/', getAllCategories);
router.post( '/', createCategory);
router.patch( '/:id', updateCategory);
router.delete( '/:id', deleteCategory);


module.exports = router;