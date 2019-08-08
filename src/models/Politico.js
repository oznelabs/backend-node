const { Schema, model } = require('mongoose');

const PoliticoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  bio: String,
  avatar: {
    type: String,
    required: true,
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'Poliico',
  }],
  dislikes: [{
    type: Schema.Types.ObjectId,
    ref: 'Poliico',
  }],
}, {
    timestamps: true,
  });

module.exports = model('Politico', PoliticoSchema)