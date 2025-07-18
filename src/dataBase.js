const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/meanMascotas')
.then((db) => console.log('Db está conectada')) 
.catch((err) => console.error(err));