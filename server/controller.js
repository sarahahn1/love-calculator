const fortune = require('./fortunedb.json')

module.exports = {
    getFortune: (req, res) => {
        console.log(fortune)
        res.status(200).send(fortune)
    }
}