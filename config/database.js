const config = require('./config');
const mongoose = require('mongoose');

module.exports = {
    connection: null,
    connect: function(){
        if(this.connection) return this.connection;
        mongoose.connect(config.DB)
                .then(res => {
                    console.log('Se conectó correctamente a la BD');
                    this.connection = res;
                })
                .catch(error => console.error(error));
    }
}