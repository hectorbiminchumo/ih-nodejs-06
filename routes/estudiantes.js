// 1. IMPORTACIONES
const express = require("express")
const router = express.Router()


// 2. RUTAS

router.get("/", (req, res) => {
	res.send("Estás en la página de estudiantes")
})
router.get("/hector", (req, res) => {
	res.send("Estás en la página de estudiantes de hector")
})




// 3. EXPORTACIONES
module.exports = router