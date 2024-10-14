const { Sequelize, DataTypes } = require('sequelize')
const database = require('./database')

const Products = database.define('products', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    name_tm: { type: DataTypes.STRING, allowNull: false },
    name_ru: { type: DataTypes.STRING, allowNull: false },
    name_en: { type: DataTypes.STRING, allowNull: false },
    desc_tm: { type: DataTypes.TEXT, allowNull: false },
    desc_ru: { type: DataTypes.TEXT, allowNull: false },
    desc_en: { type: DataTypes.TEXT, allowNull: false },
    model: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false },
    madeIn: { type: DataTypes.STRING, allowNull: false },
    inStock: { type: DataTypes.BOOLEAN, defaultValue: true },
    isNew: { type: DataTypes.BOOLEAN, defaultValue: true },
    sale_price: { type: DataTypes.FLOAT, allowNull: false },
    discount_type: { type: DataTypes.ENUM({ values: ['manat', 'goterim'] }), defaultValue: 'goterim' },
    discount_price: { type: DataTypes.INTEGER, defaultValue: 0 },
    final_price: { type: DataTypes.FLOAT, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const ProductImages = database.define('product_images', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    img: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const Banners = database.define('banners', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    img: { type: DataTypes.STRING, allowNull: false },
    types: { type: DataTypes.ENUM({ values: ['home', 'category', 'subcategory', 'product'] }), defaultValue: 'home' },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const Ad = database.define('ads', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    name_tm: { type: DataTypes.STRING, allowNull: false },
    name_ru: { type: DataTypes.STRING, allowNull: false },
    name_en: { type: DataTypes.STRING, allowNull: false },
    desc_tm: { type: DataTypes.TEXT, allowNull: false },
    desc_ru: { type: DataTypes.TEXT, allowNull: false },
    desc_en: { type: DataTypes.TEXT, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const About = database.define('abouts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    name_tm: { type: DataTypes.STRING, allowNull: false },
    name_ru: { type: DataTypes.STRING, allowNull: false },
    name_en: { type: DataTypes.STRING, allowNull: false },
    desc_tm: { type: DataTypes.TEXT, allowNull: false },
    desc_ru: { type: DataTypes.TEXT, allowNull: false },
    desc_en: { type: DataTypes.TEXT, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const AboutImages = database.define('ad_images', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    img: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const News = database.define('news', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    name_tm: { type: DataTypes.STRING, allowNull: false },
    name_ru: { type: DataTypes.STRING, allowNull: false },
    name_en: { type: DataTypes.STRING, allowNull: false },
    desc_tm: { type: DataTypes.TEXT, allowNull: true },
    desc_ru: { type: DataTypes.TEXT, allowNull: true },
    desc_en: { type: DataTypes.TEXT, allowNull: true },
    img: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const Socials = database.define('socials', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    title: { type: DataTypes.STRING, allowNull: false },
    link: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const Explore = database.define('explores', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    title: { type: DataTypes.STRING, allowNull: false },
    desc: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const Categories = database.define('categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    name_tm: { type: DataTypes.STRING, allowNull: false },
    name_ru: { type: DataTypes.STRING, allowNull: false },
    name_en: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const Subcategories = database.define('subcategories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    name_tm: { type: DataTypes.STRING, allowNull: false },
    name_ru: { type: DataTypes.STRING, allowNull: false },
    name_en: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
    desc_tm: { type: DataTypes.TEXT, allowNull: true },
    desc_ru: { type: DataTypes.TEXT, allowNull: true },
    desc_en: { type: DataTypes.TEXT, allowNull: true },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const Contacts = database.define('contacts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    fullname: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    message: { type: DataTypes.TEXT, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const Brands = database.define('brands', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    title: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const Users = database.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    login: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

// Products -> BrandId

Brands.hasMany(Products)
Products.belongsTo(Brands)

// ProductImages -> ProductId

Products.hasMany(ProductImages)
ProductImages.belongsTo(Products)

// Products -> CategoryId

Categories.hasMany(Products)
Products.belongsTo(Categories)

// Subcategories -> CategoryId

Categories.hasMany(Subcategories)
Subcategories.belongsTo(Categories)

// Products -> SubcategoryId

Subcategories.hasMany(Products)
Products.belongsTo(Subcategories)

// Explores -> CategoryId

Categories.hasMany(Explore)
Explore.belongsTo(Categories)

module.exports = {
    Products, Banners, Categories, ProductImages, Brands, Users, Subcategories, Ad, Socials, Explore, Contacts,
    News, AboutImages, About
}