const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: String,
    role: String,
    cards: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card',
      },
    ],
  },
  { versionKey: false }
)

module.exports = mongoose.model('User', userSchema)
