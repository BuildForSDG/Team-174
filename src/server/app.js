/* eslint-disable no-console */
const express = require('express');
const cropRoutes = require('./routes/crops/cropRoutes');
const animalRoutes = require('./routes/animals/animalRoutes');

const app = express();
const port = 9000;

app.use(express.json());
app.use('/api', cropRoutes);
app.use('/api', animalRoutes);

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

module.exports = app;
