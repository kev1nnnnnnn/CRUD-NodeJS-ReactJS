const multer = require('multer');

// Biblioteca Multer para upload de imagens.
module.exports = (multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            // seleciona a pasta em que irá guardar todos as imagens referente aos filmes
            cb(null, './public/upload/filmes')
        },
        filename: (req, file, cb) => {
            cb(null, Date.now().toString() + "_" + file.originalname)  
        }
    }),
    fileFilter: (req, file, cb) => {
        // as extensões de imagens que deve aceitar.
        const extensaoImg = ['image/png', 'image/jpg', 'image/jpeg'].find(formatAcept => formatAcept == file.mimetype);

        if(extensaoImg){
            return cb(null, true);
        }
        return cb(null, false);
    }
}));