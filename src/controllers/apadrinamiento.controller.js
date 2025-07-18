const apadrinamientoCtrl = {};
const Apadrinamiento = require('../models/Apadrinamiento');
const Mascota = require('../models/Mascota');

// Obtener todos los apadrinamientos
apadrinamientoCtrl.getApadrinamientos = async (req, res) => {
  try {
    const apadrinamientos = await Apadrinamiento.find().populate('idMascota');
    res.json(apadrinamientos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener apadrinamientos', error });
  }
};

// Crear nuevo apadrinamiento
apadrinamientoCtrl.crearApadrinamiento = async (req, res) => {
  try {
    const datos = req.body;
    const nuevoApadrinamiento = new Apadrinamiento(datos);
    await nuevoApadrinamiento.save();

    res.status(201).json({ message: 'Formulario de apadrinamiento enviado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear apadrinamiento', error });
  }
};

// Obtener apadrinamiento por ID
apadrinamientoCtrl.getApadrinamiento = async (req, res) => {
  try {
    const apadrinamiento = await Apadrinamiento.findById(req.params.id).populate('idMascota');
    res.json(apadrinamiento);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener apadrinamiento', error });
  }
};

// Eliminar apadrinamiento por ID
apadrinamientoCtrl.deleteApadrinamiento = async (req, res) => {
  try {
    await Apadrinamiento.findByIdAndDelete(req.params.id);
    res.json({ message: 'Apadrinamiento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar apadrinamiento', error });
  }
};

// Actualizar estado del apadrinamiento (opcional: confirmado, pendiente, rechazado)
apadrinamientoCtrl.actualizarEstado = async (req, res) => {
  try {
    const { estado } = req.body;
    const apadrinamiento = await Apadrinamiento.findById(req.params.id);

    if (!apadrinamiento) {
      return res.status(404).json({ message: 'Apadrinamiento no encontrado' });
    }

    apadrinamiento.estado = estado;
    await apadrinamiento.save();

    res.json({ message: 'Estado del apadrinamiento actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar estado', error });
  }
};

module.exports = apadrinamientoCtrl;
