const Joi = require('joi')

const IndexSchema = {     
    // GET
    allProducts: Joi.object({
        limit: Joi.number().positive().optional(),
        page: Joi.number().positive().optional(),
        categoryId: Joi.number().positive().optional(),
        dis: Joi.boolean().optional(),
    }),
    categoryProducts: Joi.object({
        // id: Joi.number().positive().required(),
        limit: Joi.number().positive().optional(),
        page: Joi.number().positive().optional(),
    }),
    allCategories: Joi.object({
        id: Joi.number().positive().optional(),
        limit: Joi.number().positive().optional(),
        page: Joi.number().positive().optional(),
    }),
    allBrands: Joi.object({
        limit: Joi.number().positive().optional(),
        page: Joi.number().positive().optional(),
    }),
    allBanners: Joi.object({
        limit: Joi.number().positive().optional(),
        page: Joi.number().positive().optional(),
    }),
    // POST
    addProduct: Joi.object({
        name_tm: Joi.string().required(),
        name_ru: Joi.string().required(),
        name_en: Joi.string().required(),
        desc_tm: Joi.string().required(),
        desc_ru: Joi.string().required(),
        desc_en: Joi.string().required(),
        model: Joi.string().required(),
        year: Joi.number().positive().required(),
        madeIn: Joi.string().required(),
        inStock: Joi.boolean().optional(),
        sale_price: Joi.number().positive().required(),
        discount_type: Joi.string().valid('manat', 'goterim').optional(),
        discount_price: Joi.number().optional(),
        categoryId: Joi.number().positive().required(),
        brandId: Joi.number().positive().required(),
    }),
    addBrand: Joi.object({
        title: Joi.string().max(100).required()
    }),
    addCategory: Joi.object({
        name_tm: Joi.string().max(100).required(),
        name_ru: Joi.string().max(100).required(),
        name_en: Joi.string().max(100).required(),
    }),
    // PUT
    updateAdmin: Joi.object({
        login: Joi.string().max(50).required(),
        password: Joi.string().max(50).required()
    }),
    updateProduct: Joi.object({
        id: Joi.number().positive().required(),
        name_tm: Joi.string().required(),
        name_ru: Joi.string().required(),
        name_en: Joi.string().required(),
        desc_tm: Joi.string().required(),
        desc_ru: Joi.string().required(),
        desc_en: Joi.string().required(),
        model: Joi.string().required(),
        year: Joi.number().positive().required(),
        madeIn: Joi.string().required(),
        inStock: Joi.boolean().optional(),
        sale_price: Joi.number().positive().required(),
        discount_type: Joi.string().valid('manat', 'goterim').optional(),
        discount_price: Joi.number().optional(),
        categoryId: Joi.number().positive().required(),
        brandId: Joi.number().positive().required(),
    }),
    // DELETE
    idController: Joi.object({
        id: Joi.number().positive().optional(),
    })
}

module.exports = IndexSchema