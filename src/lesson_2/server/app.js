var express = require('express')
    , http = require('http')
    , path = require('path');

var app = express();
var server = http.createServer(app);
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({server: server});
var colors = ['red', 'green', 'blue', 'magenta', 'purple', 'plum', 'orange'];
colors.sort(function (a, b) {
    return Math.random() > 0.5;
});
var clients = [];

wss.on('connection', function (ws) {
    clients.push(Object.assign(ws, {userID: Date.now()}));
    var userName = false;
    var userColor = false;

    ws.on('message', function (msg) {
        if (!userName) {
            userName = msg;
            userColor = colors.shift();

            const message = JSON.stringify({
                type: 'connected_new_user',
                userName,
                userID: ws.userID
            });

            clients.forEach(client => {
                client.send(message);
            });

            console.log(userName + ' login');
        } else {
            console.log(userName + ' say: ' + msg);
            var obj = {
                userID: ws.userID,
                time: (new Date()).getTime(),
                text: msg,
                author: userName,
                color: userColor
            };
            var json = JSON.stringify({type: 'got_message', data: obj});
            for (var i = 0; i < clients.length; i++) {
                clients[i].send(json);
            }
        }
    });

    ws.on('close', function () {

        var index = clients.indexOf(ws);
        clients.splice(index, 1);
        if (userName !== false && userColor != false) {
            colors.push(userColor);
        }

        const message = JSON.stringify({type: 'user_disconnected', userID: ws.userID});

        clients.forEach(client => {
            client.send(message);
        })

    });
});

app.configure(function () {
    app.set('port', process.env.PORT || 5000);
    app.set('views', __dirname + '/views');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

app.get('/', function (req, res) {
    res.sendfile(path.join(__dirname, 'views', 'chat.html'));
});

server.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
