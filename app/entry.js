'use strict';
const $ = require('jquery');
const socket = require('socket.io-client')('http://localhost:8000');
const form = $('form');
const m = $('#m');
const messages = $('#messages');

form.submit(function () {
    socket.emit('chat message', m.val());
    m.val('');
    return false;
});

socket.on('chat message', function (msg) {
    messages.append($('<li>').addClass('list-group-item').text(msg));
});