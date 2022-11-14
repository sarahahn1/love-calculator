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
    axios.post("/", postObj)

    .then ((res) => {
    console.log(res.body)
    })
    .catch ((err) => {
        console.log('error')
    })

    console.log(textBox1.value + ' ' + textBox2.value)
}



button.addEventListener("click", basicFunction)
