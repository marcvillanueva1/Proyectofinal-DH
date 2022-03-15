const express = require("express")
const router= express.Router()
const path = require("path")
const productsController = require("../controllers/productsController");
const multer = require('multer')

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})

router.get("/", productsController.products)
router.get("/cart", productsController.cart)

router.get("/agregar", productsController.agregar)
router.post('/', upload.single('image') ,productsController.store)

router.get("/modificar", productsController.modificar)
router.get("/eliminar", productsController.eliminar)

module.exports = router;