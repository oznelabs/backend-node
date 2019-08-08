const express = require('express');
const PoliticoController = require('./controllers/PoliticoController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');
const routes = express.Router();

routes.get('/politicos', PoliticoController.index);
routes.post('/politicos', PoliticoController.store);
routes.post('/politicos/:politicoId/likes', LikeController.store);
routes.post('/politicos/:politicoId/dislikes', DislikeController.store);

module.exports = routes;