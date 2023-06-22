const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const ACTIONS = require('./src/actions');
const dotenv = require('dotenv');


dotenv.config();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 5000;

const userSocketMap = {}

io.on('connection', (socket) => {
    console.log('socket connected', socket.id);
    socket.on(ACTIONS.JOIN, ({ roomId, username }) => {

    })

}
)

server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
}
);
