// Multer é uma bibliotéca que lida com corpos em multpartformdata e tambem automotiza o processo de upload de arquivos dentro do backend
const multer = require('multer');

// path é uma bibliotéca nativa do node que lida com caminhos, ela formata os caminhos de maneira correta entre ambientes windows e unix.
const path = require('path');

module.exports = {
    // salvando as imagens dentro do projeto
    storage: new multer.diskStorage({
        // Caminho relativo. __dirname retorna o diretório em que o arquivo que estou utilizando está.
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        // Formata o nome da imagem enviada para a pasta uploads
        filename: function(req, file, callback){
            callback(null, file.originalname);
        }
    })
}