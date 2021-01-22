const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index', { titles: 'index' });
});

router.get('/simulador', (req, res) => {
    res.render('simulador', { titles: 'Simulador' });
});

module.exports = router;