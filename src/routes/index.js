const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.send('<h1> hola desde express!!! </h1>');
});



module.exports = router;