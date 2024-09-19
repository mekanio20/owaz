const Response = require('../helpers/response')
const Models = require('../config/models')
const bcrypt = require('bcrypt')
const { Sequelize, Op } = require('sequelize')

class IndexController {
    // GET
    async allProducts(req, res) {
        try {
            let page = req.query.page || 1
            let limit = req.query.limit || 10
            let offset = page * limit - limit
            let whereState = {}
            if (req.query.dis) {
                whereState = {
                    discount_price: {
                        [Sequelize.Op.gt]: 0
                    }
                }
            }
            const products = await Models.Products.findAll({
                attributes: ['id', 'name_en', 'model', 'year', 'madeIn', 'inStock', 'sale_price', 'discount_type', 'discount_price', 'final_price', 'brandId', 'categoryId'],
                where: whereState,
                include: {
                    model: Models.ProductImages,
                    attributes: ['id', 'img']
                },
                limit: Number(limit),
                offset: Number(offset)
            }).catch((err) => console.log(err))
            const count = await Models.Products.count({ where: whereState }).catch((err) => console.log(err))
            const data = await Response.Success('Üstünlikli!', { count: count, rows: products })
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async fetchProduct(req, res) {
        try {
            const products = await Models.Products.findOne({
                where: { id: req.params.id },
                include: {
                    model: Models.ProductImages,
                    attributes: ['id', 'img']
                }
            })
            const data = await Response.Success('Üstünlikli!', products)
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async allBrands(req, res) {
        try {
            const brands = await Models.Brands.findAndCountAll({})
            const data = await Response.Success('Üstünlikli!', brands)
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async allBanners(req, res) {
        try {
            const banners = await Models.Banners.findAndCountAll({})
            const data = await Response.Success('Üstünlikli!', banners)
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async allCategories(req, res) {
        try {
            const categorie = await Models.Categories.findAndCountAll({})
            const data = await Response.Success('Üstünlikli!', categorie)
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    // POST
    async addProduct(req, res) {
        try {
            let data = null
            const images = req?.files?.img
            if (images === undefined) {
                data = await Response.BadRequest('Surat gerek!', [])
                return res.status(data.status).json(data)
            }
            let final_price = req.body.sale_price
            if (req.body.discount_price > 0) {
                if (req.body?.discount_price === 'goterim') {
                    let discount_amount = (req.body.sale_price * req.body.discount_price) / 100
                    final_price = req.body.sale_price - discount_amount
                } else {
                    final_price -= req.body.discount_price
                }
            }
            const product = await Models.Products.create({
                name_tm: req.body.name_tm,
                name_ru: req.body.name_ru,
                name_en: req.body.name_en,
                desc_tm: req.body.desc_tm,
                desc_ru: req.body.desc_ru,
                desc_en: req.body.desc_en,
                model: req.body.model,
                year: req.body.year,
                madeIn: req.body.madeIn,
                inStock: req.body.inStock,
                sale_price: req.body.sale_price,
                discount_type: req.body?.discount_type,
                discount_price: req.body?.discount_price,
                final_price: final_price,
                categoryId: req.body.categoryId,
                brandId: req.body.brandId
            }).catch((err) => console.log(err))
            images.forEach(async (item) => {
                await Models.ProductImages.create({
                    productId: product.id,
                    img: item.filename
                }).then(() => console.log(true))
                .catch((err) => console.log(err))
            })
            data = await Response.Created('Product döredildi!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async addBrand(req, res) {
        try {
            let data = null
            const image = req?.file?.filename
            if (!image) {
                data = await Response.BadRequest('Surat gerek!', [])
                return res.status(data.status).json(data)
            }
            await Models.Brands.create({
                title: req.body.title,
                img: image
            }).catch((err) => console.log(err))
            data = await Response.Created('Brand döredildi!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async addCategory(req, res) {
        try {
            let data = null
            const image = req?.file?.filename
            if (!image) {
                data = await Response.BadRequest('Surat gerek!', [])
                return res.status(data.status).json(data)
            }
            await Models.Categories.create({
                name_tm: req.body.name_tm,
                name_ru: req.body.name_ru,
                name_en: req.body.name_en,
                img: image
            }).catch((err) => console.log(err))
            data = await Response.Created('Category döredildi!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async addBanner(req, res) {
        try {
            let data = null
            const image = req?.file?.filename
            if (!image) {
                data = await Response.BadRequest('Surat gerek!', [])
                return res.status(data.status).json(data)
            }
            const count = await Models.Banners.count()
            if (count >= 3) {
                data = await Response.BadRequest('3 bannerden artyk goşup bolmaýar!', [])
                return res.status(data.status).json(data)
            }
            await Models.Banners.create({ img: image })
                .catch((err) => console.log(err))
            data = await Response.Created('Banner döredildi!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    // PUT
    async updateAdmin(req, res) {
        try {
            const hash = await bcrypt.hash(req.body.password, 5)
            await Models.Users.update({ where: { login: req.body.login } }, { password: hash })
            const data = await Response.Success('Admin paroly täzelend!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async updateProduct(req, res) {
        try {
            let data = null
            let final_price = req.body.sale_price
            if (req.body.discount_price > 0) {
                if (req.body?.discount_price === 'goterim') {
                    let discount_amount = (req.body.sale_price * req.body.discount_price) / 100
                    final_price = req.body.sale_price - discount_amount
                } else {
                    final_price -= req.body.discount_price
                }
            }
            req.body.final_price = final_price
            const product = await Models.Products.update(req.body, { where: { id: req.body.id } })
            if (!product) {
                data = await Response.BadRequest('Ýalňyşlyk ýüze çykdy!', [])
                return res.status(data.status).json(data)
            }
            data = await Response.Success('Haryt üýtgedildi', [])
            return res.status(data.status).json(data)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    // DELETE
    async deleteBrand(req, res) {
        try {
            let data = null
            const brand = await Models.Brands.destroy({ where: { id: req.params.id } })
            if (!brand) {
                data = await Response.BadRequest('Ýalňyşlyk ýüze çykdy!', [])
                return res.status(data.status).json(data)
            }
            data = await Response.Success('Brand pozuldy!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async deleteBanner(req, res) {
        try {
            let data = null
            const banner = await Models.Banners.destroy({ where: { id: req.params.id } })
            if (!banner) {
                data = await Response.BadRequest('Ýalňyşlyk ýüze çykdy!', [])
                return res.status(data.status).json(data)
            }
            data = await Response.Success('Banner pozuldy!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async deleteCategory(req, res) {
        try {
            let data = null
            const category = await Models.Categories.destroy({ where: { id: req.params.id } })
            if (!category) {
                data = await Response.BadRequest('Ýalňyşlyk ýüze çykdy!', [])
                return res.status(data.status).json(data)
            }
            data = await Response.Success('Category pozuldy!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async deleteProduct(req, res) {
        try {
            let data = null
            const product = await Models.Products.destroy({ where: { id: req.params.id } })
            if (!product) {
                data = await Response.BadRequest('Ýalňyşlyk ýüze çykdy!', [])
                return res.status(data.status).json(data)
            }
            data = await Response.Success('Haryt pozuldy!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async deleteImage(req, res) {
        try {
            let data = null
            const image = await Models.ProductImages.destroy({ where: { id: req.params.id } })
            if (!image) {
                data = await Response.BadRequest('Ýalňyşlyk ýüze çykdy!', [])
                return res.status(data.status).json(data)
            }
            data = await Response.Success('Surat pozuldy!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
}

module.exports = new IndexController()