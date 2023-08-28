const express = require('express');

const app = express();
const PORT = 3000;

// ROUTERS
const userRouter = require('./routes/users.js');

app.use(express.json());

app.use('/api/users', userRouter);

app.get('/api', (req, res) => {
  res.send('hello world from express!');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
