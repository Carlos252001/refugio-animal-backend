const { Router } = require('express');
const router = Router();

const apadrinamientoCtrl = require('../controllers/apadrinamiento.controller');

// Rutas CRUD para apadrinamientos
router.get('/', apadrinamientoCtrl.getApadrinamientos);          // Obtener todos
router.post('/', apadrinamientoCtrl.crearApadrinamiento);        // Crear nuevo
router.get('/:id', apadrinamientoCtrl.getApadrinamiento);        // Obtener por ID
router.delete('/:id', apadrinamientoCtrl.deleteApadrinamiento);  // Eliminar
router.put('/:id', apadrinamientoCtrl.actualizarEstado);         // Actualizar estado

module.exports = router;
