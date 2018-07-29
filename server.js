const App = require('./app');

const DB = require('./config/database');

DB.connect();

App.listen(3000,function(){
    console.log('Servidor escuchando en el puerto 3000');
});