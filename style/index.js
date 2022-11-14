const button = document.getElementById("button1")
const textBox1  =  document.getElementById("usersName")
const textBox2  =  document.getElementById("crushName")


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

