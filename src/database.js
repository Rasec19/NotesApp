const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/notes-db-app')
.then(db => console.log('Base de datos conectada'))
.catch(err => console.log(err));