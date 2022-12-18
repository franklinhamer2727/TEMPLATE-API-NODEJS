var Router = require('express');
var router = new Router;
var eventoDAO= require('../Controllers/Evento.controller');
router.post("/",eventoDAO.createEvento);
router.get('/',eventoDAO.getEventos);
router.get('/:id',eventoDAO.getEvento);


module.exports = router;