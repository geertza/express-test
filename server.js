const express = require('express');
// const cors = require('cors');gig
const path = require('path');
const app = express();

// app.get('/api/customers', cors(), (req, res) => {
//   const customers = [
//     {id: 1, firstName: 'John', lastName: 'Doe'},
//     {id: 2, firstName: 'Brad', lastName: 'Traversy'},
//     {id: 3, firstName: 'Mary', lastName: 'Swanson'},
//   ];

//   res.json(customers);
// });
// Priority serve any static files.
// app.use(express.static(path.resolve(__dirname, './client/build')));
app.get('/', function (req, res) {
  res.send('Hello World      yeah boi')
})
const port = 5000;

app.listen(port, console.log(`Server running on port ${port}`));