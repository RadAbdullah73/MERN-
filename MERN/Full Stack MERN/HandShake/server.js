const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./server/routes/user.routes')(app);
const server = app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
const io = require('socket.io')(server, { cors: true });
io.on("connection" , socket => {
    console.log(socket.id)
    socket.on("chat",data=>{
        io.emit("chat",data)
    })

});




