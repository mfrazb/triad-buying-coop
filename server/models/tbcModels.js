const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://admin:WdZ5EKfDBOqRcCuV@cluster0.6frr5dp.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    dbName: 'tbc',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Scheme = mongoose.Schema;

// set schema for each collection

// create model for each collection that will be part of the export

// export in an object all the models to be used in the controller
module.exports = {};
