const app = require('./app')

app.listen(app.get('port'), () => {
    console.log(`Server started at localhost ${app.get('port')}`);
});