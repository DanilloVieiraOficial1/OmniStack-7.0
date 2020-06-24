// Cors: Basicamente permiti que nosso backend seja acessivel pelo nosso frontend em react mesmo ele estando em dominios diferentes
// socket.io: faz com que nossa aplicação ouçã tanto o protocolo http como o protocolo web socket
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
// suport ao protocolo http
const server = require('http').Server(app)
// suport ao suport web sockets
const io = require('socket.io')(server);
app.use((req, res, next) => {
    req.io = io;
    next();
})
mongoose.connect('mongodb+srv://danillo:rasdanilloroots123@cluster0-mj8vf.mongodb.net/Cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333);