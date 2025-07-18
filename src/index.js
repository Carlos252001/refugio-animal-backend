//Archivo Principal de todo el proyecto, arranca la app
require('./dataBase')
const app = require('./app');


app.listen(app.get('port'));
console.log('Server port ', app.get('port'));