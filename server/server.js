const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.listen(port, () => console.log(`Listening on port ${PORT}`));

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});
