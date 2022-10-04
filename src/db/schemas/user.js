const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  telegramId: {
    type: Number,
    require: true
  },
  list: {
    type: Array,
    require: false
  }
})

const User = mongoose.model('User', UserSchema, 'lists')

module.exports = {
  User
}