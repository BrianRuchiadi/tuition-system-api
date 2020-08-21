import startPeerServer from './../video-stream/index.js';
import config from '../../config.js';

async function main() {
  console.log('starting Peer Server..');
  await startPeerServer(config.host, config.port_stream);
}

export default main;