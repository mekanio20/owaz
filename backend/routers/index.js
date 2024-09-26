const router = require("express").Router();
const IndexController = require("../controllers/index");
const valdidationMiddleware = require("../middlewares/validation");
const imageMiddleware = require('../middlewares/image')
const IndexSchema = require("../validations/index");
const authMiddleware = require('../middlewares/auth')

// router.put('/update/admin',
//   valdidationMiddleware(IndexSchema.updateAdmin, 'body'),
//   IndexController.updateAdmin)

router.post('/login',
    valdidationMiddleware(IndexSchema.adminLogin, 'body'),
    IndexController.adminLogin)

router.post('/add/product',
  authMiddleware,
  imageMiddleware(process.env.IMAGES).fields([
    { name: 'img', maxCount: 10 }
  ]),
  valdidationMiddleware(IndexSchema.addProduct, 'body'),
  IndexController.addProduct)

router.post('/add/brand',
  authMiddleware,
  imageMiddleware(process.env.IMAGES).single('img'),
  valdidationMiddleware(IndexSchema.addBrand, 'body'),
  IndexController.addBrand)

router.post('/add/category',
  authMiddleware,
  imageMiddleware(process.env.IMAGES).single('img'),
  valdidationMiddleware(IndexSchema.addCategory, 'body'),
  IndexController.addCategory)

router.post('/add/subcategory',
  authMiddleware,
  imageMiddleware(process.env.IMAGES).single('img'),
  valdidationMiddleware(IndexSchema.addSubcategory, 'body'),
  IndexController.addSubcategory)

router.post('/add/banner',
  authMiddleware,
  imageMiddleware(process.env.IMAGES).single('img'),
  IndexController.addBanner)

router.post('/add/contact',
  valdidationMiddleware(IndexSchema.addContact, 'body'),
  IndexController.addContact)

router.post('/add/explore',
  authMiddleware,
  imageMiddleware(process.env.IMAGES).single('img'),
  valdidationMiddleware(IndexSchema.addExplore, 'body'),
  IndexController.addExplore)

// GET
router.get('/products',
  valdidationMiddleware(IndexSchema.allProducts, 'query'),
  IndexController.allProducts)

router.get('/product/search',
  valdidationMiddleware(IndexSchema.searchProducts, 'query'),
  IndexController.searchProducts)

router.get('/category/products',
  valdidationMiddleware(IndexSchema.categoryProducts, 'query'),
  IndexController.categoryProducts)

router.get('/product/:id',
  valdidationMiddleware(IndexSchema.idController, 'params'),
  IndexController.fetchProduct)

router.get('/brands',
  valdidationMiddleware(IndexSchema.allBrands, 'query'),
  IndexController.allBrands)

router.get('/banners',
  valdidationMiddleware(IndexSchema.allBanners, 'query'),
  IndexController.allBanners)

router.get('/categories',
  valdidationMiddleware(IndexSchema.allCategories, 'query'),
  IndexController.allCategories)
  
router.get('/subcategories',
  valdidationMiddleware(IndexSchema.allSubcategories, 'query'),
  IndexController.allSubcategories)
  
router.get('/contacts',
  authMiddleware,
  IndexController.allContacts)
  
router.get('/explore', IndexController.getExplore)

// UPDATE
router.put('/update/product', 
  authMiddleware,
  valdidationMiddleware(IndexSchema.updateProduct, 'body'),
  IndexController.updateProduct)

router.put('/update/explore', 
  authMiddleware,
  imageMiddleware(process.env.IMAGES).single('img'),
  valdidationMiddleware(IndexSchema.updateExplore, 'body'),
  IndexController.updateExplore)

// DELETE
router.delete('/brand/:id',
  authMiddleware,
  valdidationMiddleware(IndexSchema.idController, 'params'),
  IndexController.deleteBrand)

router.delete('/banner/:id',
  authMiddleware,
  valdidationMiddleware(IndexSchema.idController, 'params'),
  IndexController.deleteBanner)

router.delete('/category/:id',
  authMiddleware,
  valdidationMiddleware(IndexSchema.idController, 'params'),
  IndexController.deleteCategory)

router.delete('/subcategory/:id',
  authMiddleware,
  valdidationMiddleware(IndexSchema.idController, 'params'),
  IndexController.deleteSubcategory)

router.delete('/product/:id',
  authMiddleware,
  valdidationMiddleware(IndexSchema.idController, 'params'),
  IndexController.deleteProduct)

router.delete('/image/:id',
  authMiddleware,
  valdidationMiddleware(IndexSchema.idController, 'params'),
  IndexController.deleteImage)

router.delete('/contact/:id',
  authMiddleware,
  valdidationMiddleware(IndexSchema.idController, 'params'),
  IndexController.deleteContact)

module.exports = router;