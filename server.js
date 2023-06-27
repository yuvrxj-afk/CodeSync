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
const getAllConnectedClients = (roomId) => {
    // map of socketId to username
    return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map((socketId) => {
        return {
            socketId,
            username: userSocketMap[socketId],
        }
    })
}

io.on('connection', (socket) => {
    console.log('socket connected', socket.id);
    socket.on(ACTIONS.JOIN, ({ roomId, username }) => {
        userSocketMap[socket.id] = username // 'Anonymous';
        socket.join(roomId);
        const clients = getAllConnectedClients(roomId);
        console.log(clients)
    })

}
)

server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
}
);
