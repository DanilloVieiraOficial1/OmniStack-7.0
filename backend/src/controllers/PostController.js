const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
module.exports = {
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt')
        return res.json(posts);
        
    },

    async store(req, res) {
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

        // Salvando as imagens com a extensão jpeg
        const [name] = image.split('.')
        const fileName = `${name}.jpg`;

        await sharp(req.file.path)
            .resize(500)
            .jpeg({ quality: 70 })
            .toFile(
                path.resolve(req.file.destination, 'resized', fileName)
            )
        // Apagar a imagem da pasta uploads após o resized da imagem
        fs.unlinkSync(req.file.path);

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: fileName,
        });
        req.io.emit('post', post);

        return res.json(post);
    }
};