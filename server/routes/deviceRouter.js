const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), deviceController.create)
router.get('/:id', deviceController.getOne)
router.get('/', deviceController.getAll)

module.exports = router