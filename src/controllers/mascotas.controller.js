 const mascotasCtrl = {}

 const Mascota = require('../models/Mascota');

//Métodos 
 mascotasCtrl.getMascotas = async(req, res)=> {
  const mascotas =  await  Mascota.find();
  res.json(mascotas);
 };

 mascotasCtrl.createMascota = async (req, res) => {
  try {
    const {
      imagenURL,
      nombre,
      genero,
      edad,
      tamano,
      historia,
      estadoAdopcion,
      disponibleParaAdopcion,
      disponibleParaApadrinar
    } = req.body;

    // Validaciones básicas
    if (!imagenURL || !imagenURL.startsWith('http')) {
      return res.send({ message: 'La imagen debe tener una URL válida' });
    }

    if (edad < 0) {
      return res.send({ message: 'La edad no puede ser negativa' });
    }

    const nuevaMascota = new Mascota({
      imagenURL,
      nombre,
      genero,
      edad,
      tamano,
      historia,
      estadoAdopcion,
      disponibleParaAdopcion,
      disponibleParaApadrinar
      
    });

    await nuevaMascota.save();
    res.status(201).json({ message: 'Mascota registrada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al registrar la mascota' });
  }
};


 mascotasCtrl.getMascota = async (req, res)=> {
  const mascota = await Mascota.findById( req.params.id);
   res.send(mascota);
 };

mascotasCtrl.editMascota = async (req, res) => {
  try {
    const { imagenURL, edad } = req.body;

    if (imagenURL && !imagenURL.startsWith('http')) {
      return res.send({ message: 'La imagen debe tener una URL válida' });
    }

    if (edad && edad < 0) {
      return res.send({message: 'La edad no puede ser negativa'});
    }

    await Mascota.findByIdAndUpdate(req.params.id, req.body,  { runValidators: true });
    res.json({ status: 'Mascota actualizada con éxito' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la mascota' });
  }
};





// Eliminar una mascota
mascotasCtrl.deleteMascota = async (req, res) => {
  try {
    await Mascota.findByIdAndDelete(req.params.id);
    res.json({ status: 'Mascota eliminada del registro' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la mascota' });
  }
};



 module.exports =  mascotasCtrl;