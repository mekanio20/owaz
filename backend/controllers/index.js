const Response = require('../helpers/response')
const Models = require('../config/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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
            if (req.query.categoryId) whereState.categoryId = req.query.categoryId
            if (req.query.subcategoryId) whereState.subcategoryId = req.query.subcategoryId
            if (req.query.brandId) whereState.brandId = req.query.brandId
            if (req.query.isNew) whereState.isNew = req.query.isNew
            const products = await Models.Products.findAll({
                attributes: ['id', 'name_en', 'name_ru', 'name_tm', 'model', 'year', 'madeIn', 'inStock', 'sale_price', 'discount_type', 'discount_price', 'final_price', 'brandId', 'categoryId', 'subcategoryId'],
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
    async searchProducts(req, res) {
        try {
            const search = req.query.q
            let searchQuery = {
                name_en: { [Op.iLike]: `%${search}%` },
                name_ru: { [Op.iLike]: `%${search}%` },
                name_tm: { [Op.iLike]: `%${search}%` },
            }
            const products = await Models.Products.findAll({
                attributes: ['id', 'name_en', 'name_ru', 'name_tm', 'discount_type', 'discount_price', 'final_price'],
                where: searchQuery,
                include: {
                    model: Models.ProductImages,
                    attributes: ['id', 'img']
                }
            }).catch((err) => console.log(err))
            const count = await Models.Products.count({ where: searchQuery }).catch((err) => console.log(err))
            const data = await Response.Success('Üstünlikli!', { count: count, rows: products })
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async categoryProducts(req, res) {
        try {
            let page = req.query.page || 1
            let limit = req.query.limit || 10
            let offset = page * limit - limit
            const categoryProducts = await Models.Categories.findAll({
                // where: { id: req.query.id },
                attributes: { exclude: ['img', 'createdAt', 'updatedAt'] },
                include: {
                    model: Models.Products,
                    required: true,
                    limit: Number(limit),
                    offset: Number(offset),
                    include: {
                        model: Models.ProductImages,
                        attributes: ['img']
                    }
                },
                group: ['id'],
                order: [['id', 'DESC']]
            }).catch((err) => console.log(err))
            let count = 0
            for (let item of categoryProducts) count += item.products.length
            const data = await Response.Success('Üstünlikli!', { count: count, rows: categoryProducts })
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async fetchProduct(req, res) {
        try {
            const products = await Models.Products.findOne({
                where: { id: req.params.id },
                include: [
                    {
                        model: Models.ProductImages,
                        attributes: ['id', 'img']
                    },
                    {
                        model: Models.Brands,
                        attributes: ['id', 'title']
                    },
                    {
                        model: Models.Categories,
                        attributes: ['id', 'name_tm', 'name_en', 'name_ru']
                    }
                ]
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
            const whereState = { ...(req.query.types && { types: req.query.types }) }
            const banners = await Models.Banners.findAndCountAll({ where: whereState })
            const data = await Response.Success('Üstünlikli!', banners)
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async allCategories(req, res) {
        try {
            let whereState = {}
            if (req.query.id) whereState.id = req.query.id
            const categorie = await Models.Categories.findAndCountAll({ where: whereState })
            const data = await Response.Success('Üstünlikli!', categorie)
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async allSubcategories(req, res) {
        try {
            let whereState = {}
            if (req.query.subId) whereState.id = req.query.subId
            if (req.query.id) whereState.categoryId = req.query.id
            const subcategories = await Models.Subcategories.findAndCountAll({ where: whereState })
                .catch((err) => console.log(err))
            const data = await Response.Success('Üstünlikli!', subcategories)
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async allContacts(req, res) {
        try {
            const contacts = await Models.Contacts.findAndCountAll({})
                .catch((err) => console.log(err))
            const data = await Response.Success('Üstünlikli!', contacts)
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async getExplore(req, res) {
        try {
            const explore = await Models.Explore.findOne()
                .catch((err) => console.log(err))
            const data = await Response.Success('Üstünlikli!', explore)
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async getAbout(req, res) {
        try {
            const about = await Models.About.findOne()
                .catch((err) => console.log(err))
            const data = await Response.Success('Üstünlikli!', about)
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async getAboutImages(req, res) {
        try {
            const about = await Models.AboutImages.findAndCountAll()
                .catch((err) => console.log(err))
            const data = await Response.Success('Üstünlikli!', about)
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async getServices(req, res) {
        try {
            const services = await Models.Ad.findAndCountAll()
                .catch((err) => console.log(err))
            const data = await Response.Success('Üstünlikli!', services)
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async allNews(req, res) {
        try {
            const { page = 1, limit = 100 } = req.query
            const whereState = { ...(req.query.id && { id: req.query.id }) }
            const news = await Models.News.findAndCountAll({
                where: whereState,
                limit: limit,
                offset: (page - 1) * limit
            })
            const data = await Response.Success('Üstünlikli!', news)
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    // POST
    async adminLogin(req, res) {
        try {
            let data = null
            // owaz-admin!
            const user = await Models.Users.findOne({ where: { login: req.body.login } })
                .catch((err) => console.log(err))
            if (!user) {
                data = await Response.NotFound('Admin tapylmady!', [])
                return res.status(data.status).json(data)
            }
            if(!bcrypt.compareSync(req.body.password, user.password)) {
                data = await Response.BadRequest('Parol nädogry!', {})
                return res.status(data.status).json(data)
            }
            const token = jwt.sign({ username: user.username }, 'owaz-secret!@#', { expiresIn: '365d' });
            data = await Response.Success('Üstünlikli!', { token: token })
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
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
                isNew: req.body.isNew,
                sale_price: req.body.sale_price,
                discount_type: req.body?.discount_type,
                discount_price: req.body?.discount_price,
                final_price: final_price,
                categoryId: req.body.categoryId,
                subcategoryId: req.body.subcategoryId,
                brandId: req.body.brandId
            }).catch((err) => console.log(err))
            console.log(JSON.stringify(product, null, 2))
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
    async addSubcategory(req, res) {
        try {
            let data = null
            const image = req?.file?.filename
            if (!image) {
                data = await Response.BadRequest('Surat gerek!', [])
                return res.status(data.status).json(data)
            }
            await Models.Subcategories.create({
                name_tm: req.body.name_tm,
                name_ru: req.body.name_ru,
                name_en: req.body.name_en,
                desc_tm: req.body.desc_tm,
                desc_ru: req.body.desc_ru,
                desc_en: req.body.desc_en,
                img: image,
                categoryId: req.body.categoryId
            }).catch((err) => console.log(err))
            data = await Response.Created('Subcategory döredildi!', [])
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
            const count = await Models.Banners.count({ where: { types: 'home' } })
            if (count >= 3) {
                data = await Response.BadRequest('3 bannerden artyk goşup bolmaýar!', [])
                return res.status(data.status).json(data)
            }
            await Models.Banners.create({ types: req.body.types, img: image })
                .catch((err) => console.log(err))
            data = await Response.Created('Banner döredildi!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async addContact(req, res) {
        try {
            let data = null
            await Models.Contacts.create({
                fullname: req.body.fullname,
                phone: req.body.phone,
                message: req.body.message
            }).catch((err) => console.log(err))
            data = await Response.Created('Habar ugradyldy!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async addExplore(req, res) {
        try {
            let data = null
            const image = req?.file?.filename
            if (!image) {
                data = await Response.BadRequest('Surat gerek!', [])
                return res.status(data.status).json(data)
            }
            const count = await Models.Explore.count()
            if (count >= 1) {
                data = await Response.BadRequest('1 bannerden artyk goşup bolmaýar!', [])
                return res.status(data.status).json(data)
            }
            await Models.Explore.create({
                title: req.body.title,
                desc: req.body.subtitle,
                categoryId: req.body.categoryId,
                img: image
            }).catch((err) => console.log(err))
            data = await Response.Created('Explore goşuldy!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async addNews(req, res) {
        try {
            let data = null
            const image = req?.file?.filename
            if (!image) {
                data = await Response.BadRequest('Surat gerek!', [])
                return res.status(data.status).json(data)
            }
            await Models.News.create({
                name_tm: req.body.name_tm,
                name_ru: req.body.name_ru,
                name_en: req.body.name_en,
                desc_tm: req.body.desc_tm,
                desc_ru: req.body.desc_ru,
                desc_en: req.body.desc_en,
                img: image
            }).catch((err) => console.log(err))
            data = await Response.Created('News goşuldy!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async addAbout(req, res) {
        try {
            let data = null
            const count = await Models.About.count()
            if (count >= 1) {
                data = await Response.BadRequest('About goşup bolmaýar!', [])
                return res.status(data.status).json(data)
            }
            await Models.About.create({
                name_tm: req.body.name_tm,
                name_ru: req.body.name_ru,
                name_en: req.body.name_en,
                desc_tm: req.body.desc_tm,
                desc_ru: req.body.desc_ru,
                desc_en: req.body.desc_en,
            }).catch((err) => console.log(err))
            data = await Response.Created('Goşuldy!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async addAboutImage(req, res) {
        try {
            let data = null
            const image = req?.file?.filename
            if (!image) {
                data = await Response.BadRequest('Surat gerek!', [])
                return res.status(data.status).json(data)
            }
            const count = await Models.About.count()
            if (count >= 5) {
                data = await Response.BadRequest('Max 5!', [])
                return res.status(data.status).json(data)
            }
            await Models.AboutImages.create({ img: image }).then(() => console.log(true))
            data = await Response.Created('Surat Goşuldy!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async addService(req, res) {
        try {
            let data = null
            const image = req?.file?.filename
            if (!image) {
                data = await Response.BadRequest('Surat gerek!', [])
                return res.status(data.status).json(data)
            }
            await Models.Ad.create({
                name_tm: req.body.name_tm,
                name_ru: req.body.name_ru,
                name_en: req.body.name_en,
                desc_tm: req.body.desc_tm,
                desc_ru: req.body.desc_ru,
                desc_en: req.body.desc_en,
                img: image
            }).catch((err) => console.log(err))
            data = await Response.Created('Service Goşuldy!', [])
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
    async updateExplore(req, res) {
        try {
            let data = null
            let body = {}
            const image = req?.file?.filename
            if (image) { body.img = image }
            if (req.body.title) { body.title = req.body.title }
            if (req.body.subtitle) { body.desc = req.body.subtitle }
            if (req.body.categoryId) { body.categoryId = req.body.categoryId }
            console.log(body);
            await Models.Explore.update(body, { where: { id: 2 } })
                .catch((err) => console.log(err))
            data = await Response.Success('Explore üýtgedildi!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async updateNews(req, res) {
        try {
            let data = null
            // const image = req?.file?.filename
            // if (image) { body.img = image }
            await Models.News.update(req.body, { where: { id: req.body.id } })
                .catch((err) => console.log(err))
            data = await Response.Success('News üýtgedildi!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async updateAbout(req, res) {
        try {
            let data = null
            await Models.About.update(req.body, { where: { id: req.body.id } })
                .catch((err) => console.log(err))
            data = await Response.Success('About üýtgedildi!', [])
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
    async deleteSubcategory(req, res) {
        try {
            let data = null
            const subcategory = await Models.Subcategories.destroy({ where: { id: req.params.id } })
            if (!subcategory) {
                data = await Response.BadRequest('Ýalňyşlyk ýüze çykdy!', [])
                return res.status(data.status).json(data)
            }
            data = await Response.Success('Subcategory pozuldy!', [])
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
    async deleteContact(req, res) {
        try {
            let data = null
            const contact = await Models.Contacts.destroy({ where: { id: req.params.id } })
            if (!contact) {
                data = await Response.BadRequest('Ýalňyşlyk ýüze çykdy!', [])
                return res.status(data.status).json(data)
            }
            data = await Response.Success('Contact pozuldy!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async deleteNews(req, res) {
        try {
            let data = null
            const news = await Models.News.destroy({ where: { id: req.params.id } })
            if (!news) {
                data = await Response.BadRequest('Ýalňyşlyk ýüze çykdy!', [])
                return res.status(data.status).json(data)
            }
            data = await Response.Success('News pozuldy!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async deleteAboutImages(req, res) {
        try {
            let data = null
            const about = await Models.AboutImages.destroy({ where: { id: req.params.id } })
            if (!about) {
                data = await Response.BadRequest('Ýalňyşlyk ýüze çykdy!', [])
                return res.status(data.status).json(data)
            }
            data = await Response.Success('About pozuldy!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
    async deleteService(req, res) {
        try {
            let data = null
            const ad = await Models.Ad.destroy({ where: { id: req.params.id } })
            if (!ad) {
                data = await Response.BadRequest('Ýalňyşlyk ýüze çykdy!', [])
                return res.status(data.status).json(data)
            }
            data = await Response.Success('Service pozuldy!', [])
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ status: 500, type: 'error', msg: error, detail: [] })
        }
    }
}

module.exports = new IndexController()