const express   = require('express');
const router    = express.Router();

const FilmeController = require('./src/controller/FilmeController');
const uploadImage     = require('./src/middlewares/uploadImage');

router.get('/filmes', FilmeController.listAll);
router.post('/filmes', uploadImage.single('image'), FilmeController.insert);
router.get('/filmes/:id', FilmeController.show);
router.put('/filmes/:id', uploadImage.single('image'), FilmeController.update);
router.delete('/filmes/:id', FilmeController.delete);


module.exports = router;