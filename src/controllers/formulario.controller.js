const formularioCtrl = {};
const Formulario = require('../models/Formulario');
const Mascota = require('../models/Mascota');

// Obtener todos los formularios
formularioCtrl.getFormularios = async (req, res) => {
  try {
    const formularios = await Formulario.find().populate('idMascota');
    res.json(formularios);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener formularios', error });
  }
};

// Crear nuevo formulario
formularioCtrl.crearFormulario = async (req, res) => {
  try {
    const datos = req.body;

    const nuevoFormulario = new Formulario(datos);
    await nuevoFormulario.save();

    res.status(201).json({ message: 'Formulario enviado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al enviar el formulario', error });
  }
};

// Obtener formulario por ID
formularioCtrl.getFormulario = async (req, res) => {
  try {
    const formulario = await Formulario.findById(req.params.id).populate('idMascota');
    res.json(formulario);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener formulario', error });
  }
};

// Eliminar formulario por ID
formularioCtrl.deleteFormulario = async (req, res) => {
  try {
    await Formulario.findByIdAndDelete(req.params.id);
    res.json({ message: 'Formulario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el formulario', error });
  }
};

// Actualizar estado del formulario (por ejemplo: aprobado, rechazado, etc.)


formularioCtrl.actualizarEstado = async (req, res) => {
  try {
    const { estado } = req.body;
    const formulario = await Formulario.findById(req.params.id);

    if (!formulario) {
      return res.status(404).json({ message: 'Formulario no encontrado' });
    }

    formulario.estado = estado;
    await formulario.save();

    // Si se aprueba el formulario, también se actualiza la mascota asociada
    if (estado === 'aprobado' && formulario.idMascota) {
      await Mascota.findByIdAndUpdate(formulario.idMascota, {
        estadoAdopcion: 'adoptado',
        disponibleParaAdopcion: false
      });
    }

    // Si se rechaza, vuelve a poner a la mascota como disponible
    if (estado === 'rechazado' && formulario.idMascota) {
      await Mascota.findByIdAndUpdate(formulario.idMascota, {
        estadoAdopcion: 'disponible',
        disponibleParaAdopcion: true
      });
    }

    res.json({ message: 'Estado del formulario y mascota actualizados correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar estado', error });
  }
};

module.exports = formularioCtrl;
