import startPeerServer from './../video-stream/index.js';

async function main() {
  console.log('starting Peer Server..');
  await startPeerServer('localhost', '4001');
}

export default main;