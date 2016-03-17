var io = require('socket.io')(4000)
  // Clinet: `io.connect('/socket.io')`
  .of('socket.io')
var userNum = 0
io.on('connection', function(socket) {
  socket.broadcast.emit('status', {
    userNum: userNum++
  })
  socket.on('disconnect', function() {
    socket.broadcast.emit('status', {
      userNum: userNum--
    })
  })
  socket.on('drawClick', function(data) {
    socket.broadcast.emit('draw', data)
  })
})
console.log('socket server 0.0.0.0:4000')