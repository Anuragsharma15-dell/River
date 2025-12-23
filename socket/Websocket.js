import { WebSocket } from "http";

const server  = http.createServer();

const wss = new WebSocket.Server({server});

wss.on('connection', (ws)=>{
    const clientId = Date.now();
    console.log(`Client connected: ${clientId}`);
    ws.on('message', (message)=>{
        console.log(`Received message from ${clientId}: ${message}`);

        wss.clients.forEach((client)=>{
            if(client !== ws && client.readyState === WebSocket.OPEN){
                client.send(`Client ${clientId} says: ${message}`);
            }
        })
})
    });

    