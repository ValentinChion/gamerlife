const mongoose = require('mongoose');

const config = require('./index');

mongoose.connect(config.mongodb.uri, {useNewUrlParser: true});

mongoose.connection.once('open', function(){
    console.log('Conection has been made!');
}).on('error', function(error){
    console.log('Error is: ', error);
});
