const express = require('express');
const app = express();
const pug = require('pug');
const port = 8080;

app.use(express.static('public'));
app.set('view engine', 'pug');


app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})
