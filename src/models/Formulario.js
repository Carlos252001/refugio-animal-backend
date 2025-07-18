const { Schema, model } = require('mongoose');

const formularioSchema = new Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  edad: { type: Number, required: true },
  telefono: { type: String, required: true },

  motivo: { type: String, required: true },
  vivienda: { type: String, required: true },
  situacionCambio: { type: String, required: true },
  alergias: { type: String, required: true },
  zonasAcceso: { type: String, required: true },
  preparado: { type: String, required: true },
  antecedentesMascota: { type: String, required: true },
  vacaciones: { type: String, required: true },
  conductaNegativa: { type: String, required: true },
  tiempoSolo: { type: String, required: true },

  descubrimiento: { type: String, required: true },
  distrito: { type: String, required: true },
  razonActual: { type: String, required: true },
  convivencia: { type: String, required: true },
  acuerdo: { type: String, required: true },

  idMascota: { type: Schema.Types.ObjectId, ref: 'Mascota', required: true },
  estado: { type: String,  enum: ['aprobado', 'pendiente', 'rechazado'], default: 'pendiente' },
}, {
  timestamps: true,
  versionKey: false
});

module.exports = model('Formulario', formularioSchema);
