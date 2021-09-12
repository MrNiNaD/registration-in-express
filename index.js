const express = require('express');
require('./db/conn');
const personData = require('./models/person');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/', async (req, res) => {
  try {
    const personDataRecords = new personData(req.body);
    const insertPerson = await personDataRecords.save();
    res.status(201).send(insertPerson);
  }
  catch(e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log(`Port is running at ${port}`);
})