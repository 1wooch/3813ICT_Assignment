const fs = require('fs');
const {PeerServer} = require('peer');
const peerServer=PeerServer(
    {
        port:3000,
        path:'/',
        ssl:{ }
    }
);