import moment from 'moment-timezone';
import mongoose from 'mongoose';

const { Schema } = mongoose;
const schema = new Schema(
  {
    created_at: { type: String, default: () =>moment().format() }
  },
  { autoCreate: true }
);
export default schema;