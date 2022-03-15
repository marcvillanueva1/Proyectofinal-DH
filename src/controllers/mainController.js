const path = require("path")
const fs = require("fs")

const productsPathFile = path.join(__dirname, "../data/products.JSON")
const products = JSON.parse(fs.readFileSync(productsPathFile, 'utf-8'));


const mainController = {
    index: (req, res) => {
        return res.render("index")
    },

    search: (req, res) => {
        return res.render("index")
    },

    login: (req, res) => {
        return res.render("users/login")
    },
    
    register: (req, res) => {
        return res.render("users/register")
    },
    
    admin: (req, res) => {
        return res.render("admin")
    },
    
}

module.exports = mainController;