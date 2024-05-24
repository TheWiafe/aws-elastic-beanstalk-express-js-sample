const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello, TheWiafe is here - creating a new simple web application, with a continuous pipeline delivery!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
