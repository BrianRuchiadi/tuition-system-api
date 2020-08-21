import fs from 'fs-extra';
import path from 'path';
import moment from 'moment-timezone';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// require('dotenv').config({ path: path.join(__dirname, ".env") });
dotenv.config();

const version = fs.readFileSync(path.resolve('.version'), 'utf8');

moment.tz.setDefault('UTC');
moment.defaultFormat = 'YYYY-MM-DD HH:mm:ss';
moment.defaultFormatUtc = 'YYYY-MM-DD HH:mm:ss';
mongoose.set('strict', false);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('autoIndex', true);
mongoose.set('debug', false);

export default {
  version,

  host: process.env.HOST || 'localhost',
  port_api: process.env.PORT_API || 4000,
  port_stream: process.env.PORT_STREAM || 4001,
  port_socket: process.env.PORT_SOCKET || 4002,

  mongo_conn_dbeducationauth: process.env.DB_MONGO_EDUCATION_AUTH,
};
