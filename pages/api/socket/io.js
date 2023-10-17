import { Server as ServerIO } from 'socket.io';

export const config = {
    api: {
      bodyParser: false,
    },
};
  
const ioHandler = (request, response) => {
    if (!response.socket.server.io) {
        const path = "/api/socket/io";
        const httpServer = response.socket.server;
        const io = new ServerIO(httpServer, {
            path: path,
            addTrailingSlash: false,
        });

        response.socket.server.io = io;
    }

    response.end();
}
  
export default ioHandler;
