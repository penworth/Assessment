
let image = document.querySelector("#image")
let title = document.querySelector("#title")
let fullname = document.querySelector("#name")
let phoneNumber = document.querySelector("#phone")
let email = document.querySelector("#email")
let address = document.querySelector("#address")



const getUser = ()=>{
    fetch("https://randomuser.me/api/").then((response)=>{
        return response.json()  
    }).then((data)=>{    
    console.log(data);
        image.src = "https://randomuser.me/api/portraits/med/men/56.jpg"
        title.textContent =  `Title: ${data.results[0].name.title}`
        fullname.textContent = `Fullname: ${data.results[0].name.first} ${data.results[0].name.last}`
        phoneNumber.textContent = `Phone Number: ${data.results[0].phone}`
        email.textContent = `Email: ${data.results[0].email}`
        address.textContent = `Address: ${data.results[0].location.street}`
    })

}

getUser()