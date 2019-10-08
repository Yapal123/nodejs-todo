const { Router } = require('express');
const router = Router();

router.get('/', (req, resp) => {
    resp.render('index', {
        title: 'Todos',
        isIndex: true,
    })
});

router.get('/create', (req, resp) => {
    resp.render('create', {
        title: 'craete todos',
        isCreate: true
    });
});

module.exports = router;