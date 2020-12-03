import { model, Schema } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
})

export default model('usersSchema', schema)
