const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const dotenv = require('dotenv');


dotenv.config();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 5000;


io.on('connnection', (socket) => {
    console.log('socket connected', socket.sid);
}
)

server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
}
);
