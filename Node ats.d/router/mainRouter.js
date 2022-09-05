const express = require("express")
const router = express.Router()

const {register, login, productUpload, getProducts, getProduct} = require("../controllers/mainController")
const {validateRegister} = require("../modules/validator")

router.post('/register', validateRegister, register)
router.post('/login', login)
// router.post("/productUpload", productUpload)
// router.get('/getProducts', getProducts)
// router.get('/getProduct/:id', getProduct)

// router.post("/updatePhoto", updateUser)

module.exports = router

