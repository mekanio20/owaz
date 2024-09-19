const router = require("express").Router();
const IndexController = require("../controllers/index");
const valdidationMiddleware = require("../middlewares/validation");
const imageMiddleware = require('../middlewares/image')
const IndexSchema = require("../validations/index");

// router.put('/update/admin',
//   valdidationMiddleware(IndexSchema.updateAdmin, 'body'),
//   IndexController.updateAdmin)

router.post('/add/product',
  imageMiddleware(process.env.IMAGES).fields([
    { name: 'img', maxCount: 10 }
  ]),
  valdidationMiddleware(IndexSchema.addProduct, 'body'),
  IndexController.addProduct)

router.post('/add/brand',
  imageMiddleware(process.env.IMAGES).single('img'),
  valdidationMiddleware(IndexSchema.addBrand, 'body'),
  IndexController.addBrand)

router.post('/add/category',
  imageMiddleware(process.env.IMAGES).single('img'),
  valdidationMiddleware(IndexSchema.addCategory, 'body'),
  IndexController.addCategory)

router.post('/add/banner',
  imageMiddleware(process.env.IMAGES).single('img'),
  IndexController.addBanner)

// GET
router.get('/products',
  valdidationMiddleware(IndexSchema.allProducts, 'query'),
  IndexController.allProducts)

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

router.get('/banners',
  valdidationMiddleware(IndexSchema.allBanners, 'query'),
  IndexController.allBanners)

// UPDATE
router.put('/update/product', 
  valdidationMiddleware(IndexSchema.updateProduct, 'body'),
  IndexController.updateProduct)

// DELETE
router.delete('/brand/:id',
  valdidationMiddleware(IndexSchema.idController, 'params'),
  IndexController.deleteBrand)

router.delete('/banner/:id',
  valdidationMiddleware(IndexSchema.idController, 'params'),
  IndexController.deleteBanner)

router.delete('/category/:id',
  valdidationMiddleware(IndexSchema.idController, 'params'),
  IndexController.deleteCategory)

router.delete('/product/:id',
  valdidationMiddleware(IndexSchema.idController, 'params'),
  IndexController.deleteProduct)

router.delete('/image/:id',
  valdidationMiddleware(IndexSchema.idController, 'params'),
  IndexController.deleteImage)

module.exports = router;