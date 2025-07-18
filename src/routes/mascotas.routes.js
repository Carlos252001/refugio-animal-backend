const {Router } = require('express');
const router = Router();

const mascotasCtrl = require('../controllers/mascotas.controller.js')

router.get('/', mascotasCtrl.getMascotas)
router.post('/', mascotasCtrl.createMascota)
router.get('/:id', mascotasCtrl.getMascota)
router.put('/:id', mascotasCtrl.editMascota)
router.delete('/:id', mascotasCtrl.deleteMascota)

module.exports = router;