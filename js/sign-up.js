
btn_login = document.querySelector("#btn-login");
let container_sign;
if(localStorage.getItem("sign-up") != null){
    container_sign = JSON.parse(localStorage.getItem("sign-up"));
}else{
    container_sign=[];
}
btn_login.addEventListener("click" , ()=>{
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let username = document.querySelector("#user-name").value;
    let number = [];
    let product_stor = [];
    let favorite = [];
    let pro_sign = {email , password , username , number , product_stor , favorite};
    if(email.value === "" || password.value === "" || username.value === ""){
        confirm("please enter your data");
        return;
    }
    else{
        if(container_sign.find(item=> item.username == pro_sign.username)){
            confirm("this account already have been")
            return;
        }
        else if(container_sign.find(item=> item.password == pro_sign.password)){
            confirm("this password use before please try agin")
            return;
        }
        else if(container_sign.find(item=> item.email == pro_sign.email)){
            confirm("this email use before please try agin")
            return;
        }
        else{
            container_sign.push(pro_sign);
        }
    }
    localStorage.setItem("username_user" , username);
    localStorage.setItem("email_user" , email);
    localStorage.setItem("password_user" , JSON.stringify(password));
    localStorage.setItem("sign-up" ,JSON.stringify(container_sign));
    email.value ="";
    username.value ="";
    password.value ="";
    setTimeout(()=>{
        window.location = "index.html"
    },1500)
});