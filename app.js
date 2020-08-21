import mongoose from 'mongoose';
import kill from 'kill-port';

import config from './config.js';
import createApiServer from './lib/servers/api.js';
import createStreamServer from './lib/servers/stream.js';

async function main() {
  console.log('Starting application!');

  process.on('uncaughtException', error);
  process.on('unhandledRejection', error);
  process.on('SIGTERM', error)

  const ready = await checkenv();
  if (!ready) {
    console.log('Environment not ready');
    process.exit(10);
  }

  await startApiServer();
  await startStreamServer();
}

async function startApiServer() {
  try {
    const { server, api } = await createApiServer();

    server.listen(config.port_api, () => {
      console.log(`API Server running on ${config.host}:${config.port_api}`);
    });

    return api;
  } catch (error) {
    console.log('something wrong in startApiServer', error);
  }
}

async function startStreamServer() {
  try {
    await createStreamServer();
  } catch (error) {
    console.log('something wrong in startStreamServer', error);
  }
}

async function error(error) {
  console.log('error!');
  console.log(error);
  switch (error.errno) {
    case 'EADDRINUSE': console.log(`EADDRINUSE: PORT in use`); break;
    default: console.log(error.message);
  }

  console.log('___kill config.port_api', config.port_api);
  console.log('___kill config.port_api', config.port_stream);
  console.log('___kill config.port_socket', config.port_socket);
  kill(config.port_api, 'tcp');
  kill(config.port_stream, 'tcp');
  kill(config.port_socker, 'tcp');

  process.exit(1);
}

async function checkenv() {
  try {
    await mongoose.connect(config.mongo_conn_dbeducationauth);

    return true;
  } catch (error) {
    // throw error;
    console.error('errrrr', error.message);
    // console.error(error.stack);
    return false;
  }
}

main();