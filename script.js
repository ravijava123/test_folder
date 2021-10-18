// function test(num){
//     let result
//     if (num%2==0){
//         return true
//     }
//     else if (num%3==0){
//         return true
//     }
//     else if (num%5==0){
//         return true
//     }
//     return false
// }

// console.log(test(7))


// function test(num1,num2){
//     let num3= Math.abs(100-num1)
//     let num4 = Math.abs(100-num2)
//     if(num3<num4){
//         return num1
//     }
  
//     return num2
// }

// console.log(test(99,120))


// function rev(str1){
   
//     console.log(str1.split("").reverse().join(""))

// }

// rev("abcd")

// function arr(num1){
//     var num2 = 0
//     let grt

//    for (let index = 0; index < num1.length; index++) {

//        if (num1[num2]< num1[index+1]) {
//            num2=index+1
           
//        }

    
       
//    }
//     return console.log(num1[num2])

// }

// arr([7,4,3,2])
    
let first = document.getElementById("third")
let fourth = document.getElementById("fourth")
let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let username = document.getElementById("username")
let password = document.getElementById("password")
console.log(first)
function set(num){
    for (let index = 0; index < num; index++) {

        first.innerHTML +="<a href='http://www.goole.com'>google</a> <button>click</button>"
        first.style.backgroundColor = "green"
        first.style.margin = "20px"
        first.style.padding = "20px 20px"


      
        
    }
}

set(5)
// first.style.display = "none"

function del(n1){
    first.innerHTML=""

    for (let index = 0; index < n1; index++) {
        

        first.innerHTML +="<a href='http://www.goole.com'>google</a> <button>click</button>"
        first.style.backgroundColor = "green"
        first.style.margin = "20px"
        first.style.padding = "20px 20px"


      
        
    }
}

del(1)

// btn.addEventListener("click",new1)

// function new1(){
//     console.log("i am clicked")
//     fourth.innerHTML = ` <form action="">
//     <label for="username"> Username</label>
//     <input type="text" placeholder="username" id='username'>
//     <label for="password"> Password</label>
//     <input type="password" placeholder="password" id='password'>
// </form> <button id = "btn2">submit </button>`
// }

btn2.addEventListener("click",data) 

function data() {
    username.style.color = "black"
    console.log("User Name: ",username.value)
    console.log("Password: ",password.value)
    username.value=""
    password.value=""
}