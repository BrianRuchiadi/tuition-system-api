'use strict';
import mongoose from 'mongoose';
import fs from 'fs-extra';
import path from 'path';
import url from 'url';
import config from '../../../config.js';

const models = { autoCreate: true };

const conn = mongoose.createConnection(config.mongo_conn_dbeducationauth);
const database = conn.useDb('dbeducationauth');
const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const basename = import.meta.url.replace('index.js', '');
const infos = fs.readdirSync(dirname)
  .filter(filename => filename !== 'index.js' && filename.slice(-3) === '.js')
  // .filter(filename => filename === 'log_activity.js')
  .map(filename => ({ path: basename + filename, name: filename.split('.')[0] }));

for (const info of infos) {
  const schema = (await import(info.path)).default;
  models[info.name] = database.model(info.name, schema, info.name);
}

export default models;