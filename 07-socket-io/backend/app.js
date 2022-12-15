const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello');
});

let lastColor = "#000"

io.on("connection", (socket)=> {
    console.log("bir kullanıcı bağlandı");

    socket.emit("receive", lastColor);

    socket.on("newColor", (color) => {
        console.log(color);

        lastColor = color;
        socket.broadcast.emit("receive", color);
    });

    socket.on("disconnect", () => {
        console.log("bir kullanıcı ayrıldı.");
    });
});

http.listen(3001, () => console.log("Server is up now !!"))