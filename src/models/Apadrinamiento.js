const { Schema, model } = require('mongoose');

const apadrinamientoSchema = new Schema({
  nombreDonante: { type: String, required: true },
  correoDonante: { type: String, required: true },
  telefono: { type: String, required: true },
  monto: { type: Number, required: true },
  mensaje: { type: String }, // mensaje opcional

  idMascota: { type: Schema.Types.ObjectId, ref: 'Mascota', required: true },
  
  estado: {
    type: String,
    enum: ['pendiente', 'confirmado', 'rechazado'],
    default: 'pendiente'
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = model('Apadrinamiento', apadrinamientoSchema);
