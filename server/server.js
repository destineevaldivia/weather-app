
const express = require('express');
const cors = require('cors');

//create instance of express.js framework application 
const app = express();

//enable CORS
app.use(cors())

//Set the port that you want the server to run on
const PORT = process.env.PORT || 5002;

//creates an endpoint for the "root" route, at /api
app.get('/api', (req, res) => {
  res.json({ message: 'From ExpressJs'});
});
//creates an endpoint for the route /myname
app.get('/api/myname', (req, res) => {
    const name = { name: "Destinee Valdivia" };
    res.json(name);
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});