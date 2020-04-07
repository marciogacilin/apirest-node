const app = require('../src/app')
const http = require('http')
const debug = require('debug')('nodestr:server')

// PORT // based on express-generator
function normalizePort(val) {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
  
    if (port >= 0) {
      return port;
    }
  
    return false;
}

const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

//error handler
function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
    
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requer privilégios elevados');
        process.exit(1);
  
      case 'EADDRINUSE':
        console.error(bind + ' já está em uso');
        process.exit(1);
  
      default:
        throw error;
    }
}

// listener handler
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

//server
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log(`API rodando na porta ${port}!`);

/* 
O ambiente configurado para rodar o servidor em tempo de desenvolvimento foi DEV, conforme definido
no package.json, scripts:dev. Portanto, para rodar em tempo de desenvolvimento, basta executar o seguinte
comando: npm run dev
*/