const express = require('express');
const cors = require('cors');

const { PORT } = require('./config');

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server running successfully at port ${PORT}`);
  } else {
    console.log('Error occurred! Server failed to run');
  }
});
