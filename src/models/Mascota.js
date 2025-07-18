const {Schema, model} = require("mongoose");

const mascotaSchema = new Schema({
    imagenURL: {type: String, required: true},
    nombre: {type: String, required: true},
    edad: {type: Number, required: true},
    genero: {type: String, required: true},
    tamano: {type: String, required: true},
    historia: {type: String, required: true},
    estadoAdopcion: {
        type: String,
        enum: ['disponible', 'pendiente', 'adoptado'],
        default: 'disponible'

    },
    disponibleParaAdopcion: {type:Boolean, default: true},
    disponibleParaApadrinar: {type: Boolean, default: true},
    
    
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model("Mascota", mascotaSchema);