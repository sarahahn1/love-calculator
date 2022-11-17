const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios').default
const path = require('path')


app.set('view engine')
app.use(express.json())

app.use (express.static('style'))

const {getFortune, getZodiac} = require('./controller')

app.get("/", (req, res) => {
    console.log('serving in home')
    res.sendFile(path.join(__dirname, "./../style/main.html"))


})

app.get('/randomFortune', getFortune)
app.get('/zodiac', getZodiac)


app.post('/', (req,res) => {
    console.log(req.body)
    userName = req.body.userName
    partnerName = req.body.partnerName
    let combinedNames = userName + partnerName
    let lowerNames = combinedNames.toLowerCase()

    let s = lowerNames.split("s").length -1
    let o = lowerNames.split("o").length -1
    let u = lowerNames.split("u").length -1
    let l = lowerNames.split("l").length -1

    let firstDigit = s + o + u + l
    if (firstDigit < 5) {
        firstDigit = firstDigit + 5
    }



    let m = lowerNames.split("m").length -1
    let a = lowerNames.split("a").length -1
    let t = lowerNames.split("t").length -1
    let e = lowerNames.split("e").length -1
    
    let secondDigit = m + a + t + e
    let lovePercentage = firstDigit + '' + secondDigit
    res.status(200).send(lovePercentage)
})



app.listen (4567, (req,res) => {
     console.log("app is running on port 4567")
})