const { Router } = require('express');
const router = Router();

const formularioCtrl = require('../controllers/formulario.controller');

// Rutas CRUD para formularios
router.get('/', formularioCtrl.getFormularios); // Obtener todos los formularios
router.post('/', formularioCtrl.crearFormulario); // Crear un nuevo formulario
router.get('/:id', formularioCtrl.getFormulario); // Obtener un formulario por ID
router.delete('/:id', formularioCtrl.deleteFormulario); // Eliminar un formulario
router.put('/:id', formularioCtrl.actualizarEstado); // Actualizar el estado del formulario


module.exports = router;
