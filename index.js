
const port = process.env.PORT || 3000

const datagram = require("dgram");
const socket = datagram.createSocket("udp4");

//listen incomming messages
socket.on("message", (msg, receInfo) => {
    //display msg and sender information ip:port
    console.log(`I Have Already Received: ${msg} from ${receInfo.address}:${receInfo.port}`);
});
socket.bind(port);
