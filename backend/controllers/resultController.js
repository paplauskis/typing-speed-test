const Result = require('../models/resultSchema')

exports.home_get = async (req, res) => {
  res.send('hi')
}

exports.home_create_result_post = async (req, res) => {
  const {
    username,
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
      username,
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
  try {
    const oneMinuteResults = await Result.find({ device: 'pc', minutes: 1 })
      .sort({
        score: -1,
        accuracy: -1,
        correctChars: -1,
      })
      .limit(100)
    const twoMinuteResults = await Result.find({ device: 'pc', minutes: 2 })
      .sort({
        score: -1,
        accuracy: -1,
        correctChars: -1,
      })
      .limit(100)
    const threeMinuteResults = await Result.find({ device: 'pc', minutes: 3 })
      .sort({
        score: -1,
        accuracy: -1,
        correctChars: -1,
      })
      .limit(100)
    res
      .status(200)
      .json({ oneMinuteResults, twoMinuteResults, threeMinuteResults })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

exports.mobile_rankings_get = async (req, res) => {
  res.send('mobile rankings')
}
