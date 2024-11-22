const fortunes = require('./fortunes.json')

const getFortune = () => fortunes[Math.floor(Math.random() * 10)]

module.exports = getFortune