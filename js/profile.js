let  name = document.querySelector("#name");
let  email_user = document.querySelector("#email");
let  password_user = document.querySelector("#pass");
let sin_up = JSON.parse(localStorage.getItem("sign-up"));
let user = localStorage.getItem("username_user");
let email = localStorage.getItem("email_user");
let password = JSON.parse(localStorage.getItem("password_user"));
function getuser(){
    sin_up.find((item)=>{
        if(item.username == user && item.email == email && item.password == password){
            name.value = item.username;
            email_user.value = item.email;
            password_user.value = item.password;
        }
    });
    
}
getuser();

let change_btn = document.querySelector(".change-btn-name");
change_btn.addEventListener("click" , ()=>{
let  name = document.querySelector("#name");
    sin_up.find((item)=>{
        if(item.username == user){
            item.username = name.value;
            localStorage.setItem("sign-up" , JSON.stringify(sin_up) )
            localStorage.setItem("username_user" , name.value);
        }
        else{
            console.log("error")
        }
    })
    getuser();
})

let change_btn_email = document.querySelector(".change-btn-email");
change_btn_email.addEventListener("click" , ()=>{
    let  email_user = document.querySelector("#email");
    let  password_user = document.querySelector("#pass");
    sin_up.find((item)=>{
        if(item.email == email && item.password == password){
            item.email = email_user.value;
            item.password = password_user.value;
            localStorage.setItem("sign-up" , JSON.stringify(sin_up))
            localStorage.setItem("email_user" , email_user.value);
            localStorage.setItem("password_user" , JSON.stringify(password_user.value));
        }
        else{
            console.log("error")
        }
    })
    getuser();
})



let add_number = document.querySelector(".add-number");
add_number.addEventListener("click" , ()=>{
    let number = document.querySelector("#add-num");
    sin_up.find((item)=>{
        if(item.username == user){
            item.number.push(number.value);
            localStorage.setItem("sign-up" , JSON.stringify(sin_up) )
        }
        else{
            console.log("error")
        }
    })
})


// ************************************************** number product to add in favorite
let number_product_favorite = document.querySelector(".number-favorite");
let favorite_array = JSON.parse(localStorage.getItem("sign-up"));
favorite_array.find(item=>{
    if(item.username == user){
        number_product_favorite.innerHTML = item.favorite.length;
    }
})


// ****************************************************************** log-out

let log_out = document.querySelector("#log-out");


    log_out.addEventListener("click" , ()=>{
       
        localStorage.clear();
        setTimeout(()=>{
            window.location = "sign-up.html";
        }, 1500)
    })

// **************************************************************** show username in padge

let name_profile = document.querySelector(".name-profile");
name_profile.innerHTML = user;