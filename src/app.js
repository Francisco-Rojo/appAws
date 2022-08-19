const express = require('express');
const app = express();

app.set('port', 8080);

// routs
app.use(require('./routes/index'));
app.use((req, res, next) => {
    res.status(404).send('404 not found'); // archive or page not found
});


module.exports = app;