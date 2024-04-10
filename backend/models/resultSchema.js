const mongoose = require('mongoose')

const Schema = mongoose.Schema

const resultSchema = new Schema({
  score: {
    type: Number,
    required: true,
  },
  wrongWords: {
    type: Number,
    required: true,
  },
  correctWords: {
    type: Number,
    required: true,
  },
  wrongChars: {
    type: Number,
    required: true,
  },
  correctChars: {
    type: Number,
    required: true,
  },
  wpm: {
    type: Number,
    required: true,
  },
  cpm: {
    type: Number,
    required: true,
  },
  accuracy: {
    type: Number,
    required: true,
  },
  device: {
    type: [String],
    enum: ['pc', 'mobile'],
    required: true,
  },
  minutes: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Result', resultSchema)
