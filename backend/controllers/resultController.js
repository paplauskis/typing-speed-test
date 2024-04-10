const Result = require('../models/resultSchema')

exports.home_get = async (req, res) => {}

exports.home_create_result_post = async (req, res) => {
  const {
    score,
    wrongWords,
    correctWords,
    wrongChars,
    correctChars,
    wpm,
    cpm,
    accuracy,
    device,
    minutes,
  } = req.body
  try {
    const result = await Result.create({
      score,
      wrongWords,
      correctWords,
      wrongChars,
      correctChars,
      wpm,
      cpm,
      accuracy,
      device,
      minutes,
    })
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.pc_rankings_get = async (req, res) => {
  
}
