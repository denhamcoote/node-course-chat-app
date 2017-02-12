var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    to: 'All',
    text: 'Hello from socket.io client'
  });
});

socket.on('disconnect', function () {
  console.log('Disonnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
