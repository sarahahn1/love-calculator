const button = document.getElementById("button1")
const getFortune = document.getElementById("getFortune")
const textBox1  =  document.getElementById("usersName")
const textBox2  =  document.getElementById("crushName")
  let section2 = document.getElementById("section2")

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


// const fortunes = [
//     "you could do better. but they're alright", "You and your crush are soulmates !", "You could do better", "you will live happily ever after", "You will find success in your love life", "someone better is coming", "you're getting married soon;)", "long lived love", "You will find love soon!", 
// ]



// function yourFortune() {
// let randomFortune = Math.floor(Math.random () * fortunes.length)
// document.getElementById("fortune").innerHTML = fortunes[randomFortune];
// }




function randomFortune () {
    axios.get('/randomFortune').then((res) => {
        console.log(res.data)
        let arr = res.data

        let fortune = document.createElement("h1")
        fortune.textContent = arr[Math.floor(Math.random() * arr.length)].fortune
      
        section2.appendChild(fortune)
       
    })

}

getFortune.addEventListener("click", randomFortune)