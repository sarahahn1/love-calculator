const button = document.getElementById("button1")
const getFortune = document.getElementById("getFortune")
const textBox1  =  document.getElementById("usersName")
const textBox2  =  document.getElementById("crushName")
  let section2 = document.getElementById("section2")
let section3 = document.getElementById("section3")
let section4 = document.getElementById("section4")
let section5 = document.getElementById("section5")
let section6 = document.getElementById("section6")
let section7 = document.getElementById("section7")
let section8 = document.getElementById("section8")
let section9 = document.getElementById("section9")
let section10 = document.getElementById("section10")
let section11 = document.getElementById("section11")
let section12 = document.getElementById("section12")
let section13 = document.getElementById("section13")
let section14 = document.getElementById("section14")



function basicFunction(evt) {
    evt.preventDefault()
    

    let postObj = 
    { 
        userName: textBox1.value,
        partnerName: textBox2.value,
    }


    console.log(textBox1.value + ' ' + textBox2.value)
   
    axios.post("/", postObj)
    .then ((res) => {
    console.log(res.data)

    let percent = document.createElement("h1")
    percent.textContent = (res.data + '%')
    let section = document.getElementById("percent1")
    section.innerHTML=""
    section.appendChild(percent)
    })
    .catch ((err) => {
        console.log('error')
    })


}



button.addEventListener("click", basicFunction)





function randomFortune () {
    axios.get('/randomFortune').then((res) => {
        console.log(res.data)
        let arr = res.data

        let fortune = document.createElement("h1")
        fortune.textContent = arr[Math.floor(Math.random() * arr.length)].fortune
        section2.innerHTML=""
        section2.appendChild(fortune)
       
    })

}
getFortune.addEventListener("click", randomFortune)




function randomZodiac () {
    axios.get('/zodiac').then ((res) => {
        console.log(res.data)
        let arr = res.data
    let zodiac = document.createElement("h1")
    
        zodiac.textContent = arr[0].zodiac
        section3.innerHTML=""
        section3.appendChild(zodiac)

    })
}

gemini.addEventListener("click", randomZodiac)

function getTaurus () {
    axios.get('/zodiac').then((res) => {
        console.log(res.data)
        let arr= res.data
        let zodiac = document.createElement("h1")

        zodiac.textContent = arr[1].zodiac
        section4.innerHTML=""
        section4.appendChild(zodiac)
    })
}

taurus.addEventListener("click", getTaurus)

function getAries () {
    axios.get('/zodiac').then((res) => {
        console.log(res.data)
        let arr = res.data
        let zodiac = document.createElement("h1")

        zodiac.textContent = arr[2].zodiac
        section5.innerHTML=""
        section5.appendChild(zodiac)

    })
}

aries.addEventListener("click", getAries)


function getCancer () {
    axios.get('/zodiac').then((res) => {
        console.log(res.data)
        let arr = res.data
        let zodiac = document.createElement("h1")

        zodiac.textContent = arr[3].zodiac
        section6.innerHTML=""
        section6.appendChild(zodiac)

    })
}

cancer.addEventListener("click", getCancer)


function getLeo () {
    axios.get('/zodiac').then((res) => {
        console.log(res.data)
        let arr = res.data
        let zodiac = document.createElement("h1")

        zodiac.textContent = arr[4].zodiac
        section7.innerHTML=""
        section7.appendChild(zodiac)

    })
}

leo.addEventListener("click", getLeo)

function getVirgo () {
    axios.get('/zodiac').then((res) => {
        console.log(res.data)
        let arr = res.data
        let zodiac = document.createElement("h1")

        zodiac.textContent = arr[5].zodiac
        section8.innerHTML=""
        section8.appendChild(zodiac)

    })
}

virgo.addEventListener("click", getVirgo)

function getLibra () {
    axios.get('/zodiac').then((res) => {
        console.log(res.data)
        let arr = res.data
        let zodiac = document.createElement("h1")

        zodiac.textContent = arr[6].zodiac
        section9.innerHTML=""
        section9.appendChild(zodiac)

    })
}

libra.addEventListener("click", getLibra)


function getScorpio () {
    axios.get('/zodiac').then((res) => {
        console.log(res.data)
        let arr = res.data
        let zodiac = document.createElement("h1")

        zodiac.textContent = arr[7].zodiac
        section10.innerHTML=""
        section10.appendChild(zodiac)

    })
}

scorpio.addEventListener("click", getScorpio)


function getSagittarius () {
    axios.get('/zodiac').then((res) => {
        console.log(res.data)
        let arr = res.data
        let zodiac = document.createElement("h1")

        zodiac.textContent = arr[8].zodiac
        section11.innerHTML=""
        section11.appendChild(zodiac)

    })
}

sagittarius.addEventListener("click", getSagittarius)

function getCapricorn () {
    axios.get('/zodiac').then((res) => {
        console.log(res.data)
        let arr = res.data
        let zodiac = document.createElement("h1")

        zodiac.textContent = arr[9].zodiac
        section12.innerHTML=""
        section12.appendChild(zodiac)

    })
}

capricorn.addEventListener("click", getCapricorn)

function getAquarius () {
    axios.get('/zodiac').then((res) => {
        console.log(res.data)
        let arr = res.data
        let zodiac = document.createElement("h1")

        zodiac.textContent = arr[10].zodiac
        section13.innerHTML=""
        section13.appendChild(zodiac)

    })
}

aquarius.addEventListener("click", getAquarius)

function getPisces () {
    axios.get('/zodiac').then((res) => {
        console.log(res.data)
        let arr = res.data
        let zodiac = document.createElement("h1")

        zodiac.textContent = arr[11].zodiac
        section14.innerHTML=""
        section14.appendChild(zodiac)

    })
}

pisces.addEventListener("click", getPisces)