const express = require('express');

const app = express();
const PORT = 3000;

// REQUIRED ROUTERS
const productRouter = require('./routes/products.js');

app.use(express.json());

// serve products data
app.use('/api/products', productRouter);

// app.get('/api', (req, res) => {
//   res.send('hello world from express!');
// });

// TODO: Add 404 html page
// serve 404 status
// app.use((req, res) => res.sendStatus(404));

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
