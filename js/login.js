let email = document.querySelector("#email");
let password = document.querySelector("#password");
btn_login = document.querySelector("#btn-login");
btn_login.addEventListener("click" , ()=>{
    let login = JSON.parse(localStorage.getItem("sign-up"));
    if(email.value === "" || password.value === ""){
        confirm("please fill your data");
    }
    else{
        login.find((item)=>{
            if(item.email == email.value && item.password == password.value){
                localStorage.setItem("username_user" , item.username);
                localStorage.setItem("email_user" , item.email);
                localStorage.setItem("password_user" , JSON.stringify(item.password));
                confirm(`welcome Mr ${item.username} in pitco website`);
                setTimeout(()=>{
                    window.location = "index.html";
                })
                return;
            }
            
        })
    }
})
