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
var upload = multer({storage})

//Agregar producto
router.get('/agregar', productsController.agregar);

router.post('/agregar', upload.single('image'), productsController.guardado);

//Productos
router.get('/', productsController.listado);

//Detalle
router.get('/detail/:id', productsController.detalle);

//Actualizacion de producto
router.get('/modificar/:id', productsController.editar);

router.patch('/editar/:id', productsController.actualizar);

//Eliminar producto
router.delete('/detail/:id', productsController.eliminar)

/*
router.get("/", productsController.products)
router.get("/cart", productsController.cart)
router.get('/detail/:id', productsController.detail)

router.get("/agregar", productsController.agregar)
router.post('/',upload.single("image"), productsController.store);

router.get("/modificar/:id", productsController.modificar)
router.put("/:id/guardar", productsController.guardar);

router.delete("/detail/:id", productsController.eliminar)
*/

module.exports = router;