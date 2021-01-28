const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.get('/api/customers', cors(), (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, './client/build')));
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);