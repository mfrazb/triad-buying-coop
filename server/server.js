const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// REQUIRED ROUTERS
const productRouter = require('./routes/products.js');

app.use(express.json());

// is this correct way to serve dist folder?
app.use(express.static(path.join(__dirname, './../dist')));

// serve products data
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './../dist/index.html'));
});

// serve 404 status
// TODO: Add 404 html page
app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);

  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
