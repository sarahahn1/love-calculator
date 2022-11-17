const fortune = require('./fortunedb.json')
const zodiac = require('./zodiacdb.json')

module.exports = {
    getFortune: (req, res) => {
        console.log(fortune)
        res.status(200).send(fortune)
    },
     getZodiac: (req, res) => {
        console.log(zodiac)
      res.status(200).send(zodiac)
     },
}