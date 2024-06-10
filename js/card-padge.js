let product = JSON.parse(localStorage.getItem("sign-up"));
let user = localStorage.getItem("username_user");
let container = document.querySelector(".content-product");
function show_data(){
    product.find((item)=>{
        if(item.username == user){
            item.product_stor.map((item)=>{
                container.innerHTML +=`
                    <div id="${item.id}" class="card box-product text-center pb-3">
                        <img src="${item.img}" alt="" class="card-img-top mb-2">
                        <div class="card-body p-0">
                            <div id="${item.category}" class="card-title mb-3">${item.name}</div>
                            <div class="price-section d-flex  align-items-center justify-content-center mb-3">
                                <span class="price d-block me-3 text-capitalize">price : ${item.price}</span>
                                <input type="number" value="1" class="increment">
                            </div>
                            <span class="total-card-price d-block  text-capitalize">total : ${item.price}</span>
                        </div>
                        <button onclick="remove_item(this.parentElement)" class="remove-item"><i class="fa-solid fa-trash"></i></button>
                        <button class="add_favorite"><i class="fa-solid fa-heart"></i></button>
                    </div>
                    
                `
            })
        }
    })
    
}
show_data();


function remove_item(parent){
    product.map((item)=>{
        item.product_stor = item.product_stor.filter((el)=>el.id != parent.id);
        parent.remove();
        item.product_stor.splice(1 , parent.remove());
        localStorage.setItem("sign-up" , JSON.stringify(product));
    })
}



// ****************************************************************************

let increment = document.querySelectorAll(".increment");
increment.forEach((item)=>{
    item.addEventListener("change" , quantity);
})

function quantity(){
    if(this.value <= 0 || this.value == null){
        this.value = "1";
    }
    gettotal(this.value , this.parentElement);
}


function gettotal(value , parent){
    let total_price = 0;
    let parent2 = parent.parentElement;
    let total = parent2.querySelector(".total-card-price");
    let el_price = parent2.querySelector(".price");
    let price = parseInt(el_price.innerHTML.replace("price : $" , ""));
    total_price += price * Number(value);
    total.innerHTML = "Total : $" + total_price; 
}



// ***************************************************************************** add to favorite

try{
    let add_favorite = document.querySelectorAll(".add_favorite");
    add_favorite.forEach((item)=>{
        item.addEventListener("click" , getfavorite )
    })
    function getfavorite(){
        let parent = this.parentElement;
        let el_favorite = parent.querySelector(".add_favorite");
        
        let img = parent.querySelector(".card-img-top").src;
        let name = parent.querySelector(".card-title").innerHTML;
        let category = parent.querySelector(".card-title").id;
        let id = parent.id;
        let price_data = parent.querySelector(".price").innerHTML;
        let price = price_data.replace("price :" , "");
        let favorite_pro = {img , name , price , id , category };
    
        product.find(item=>{
            if(item.username == user){
                if(item.favorite.find(el=> el.id == favorite_pro.id)){
                    confirm("product already have been");
                    return;
                }else{
                    item.favorite.push(favorite_pro);
                    localStorage.setItem("sign-up" , JSON.stringify(product));
                    el_favorite.style.color = "red";
                    el_favorite.style.background = "black";
                }
            }
        })
        
        
    }
    }catch(e){
        console.log(e);
    }

    // ****************************************************************** search

    let main_input = document.querySelector("#main-input");
    let box_product = document.querySelectorAll(".box-product")
    let card_title = document.querySelectorAll(".card-title");
    
    function search(){
        for(let i = 0 ; i < card_title.length ; i++){
            
            if(card_title[i].id.toLowerCase().indexOf(main_input.value.toLowerCase()) >= 0){
                box_product[i].style.display = "";
            }else{
                box_product[i].style.display = "none";
            }
        }
    }

    // ****************************************************************** log-out

    let log_out = document.querySelector("#log-out");

    log_out.addEventListener("click" , ()=>{
        console.log("hello")
        product.map(item=>{
            if(item.username == user){

                console.log(item)
                localStorage.setItem("sign-up" , JSON.stringify(product));
                setTimeout(()=>{
                    window.location = "sign-up.html";
                }, 1500)
            }else{
                console.log("error")
            }
        })
    })

    // ******************************************************************** show username in padge

    
    let name_profile = document.querySelector(".name-profile");
    name_profile.innerHTML = user;