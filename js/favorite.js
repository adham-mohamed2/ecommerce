let product_favorite = JSON.parse(localStorage.getItem("sign-up"));
let user = localStorage.getItem("username_user");
let container = document.querySelector(".content-product-favorite");

function show_product_favorite(){
    product_favorite.find((item)=>{
        if(item.username == user){
            item.favorite.map((item)=>{
                container.innerHTML +=`
                <div id="${item.id}" class="card box-product-favorite text-center pb-3">
                        <img src="${item.img}" alt="" class="card-img-top mb-2">
                        <div class="card-body p-0">
                            <div id="${item.category}" class="card-title mb-3">${item.name}</div>
                            <div class="price-section d-flex  align-items-center justify-content-center mb-3">
                                <span class="price d-block me-3 text-capitalize">price : ${item.price}</span>
                                <span class="total-card-price d-block  text-capitalize">total : ${item.price}</span>
                            </div>
                            
                        </div>
                        <button onclick="remove_item(this.parentElement)" class="remove-item"><i class="fa-solid fa-trash"></i></button>
                        <button class="add_to_card"><i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                `
            })
        }
    })
}
show_product_favorite();


// ****************************************************************************** remove from favorite padge

function remove_item(parent){
    product_favorite.map((item)=>{
        item.favorite = item.favorite.filter((el)=>el.id != parent.id);
        parent.remove();
        item.favorite.splice(1 , parent.remove());
        localStorage.setItem("sign-up" , JSON.stringify(product_favorite));
    })
}


// ***************************************************************************** add to card from favorite badge


let add_to_card = document.querySelectorAll(".add_to_card");
add_to_card.forEach((item)=>{
    item.addEventListener("click" , add_card);
})

function add_card(){
    let parent = this.parentElement;
    let img = parent.querySelector(".card-img-top").src;
    let name = parent.querySelector(".card-title").innerHTML;
    let category = parent.querySelector(".card-title").id;
    let price_data = parent.querySelector(".price").innerHTML;
    let price = price_data.replace("price : " , "");
    let id = parent.id;
    let pro_card = {img , name , price , id , category};

    product_favorite.find(item=>{
        if(item.username == user){
            if(item.product_stor.find(el=> el.id == pro_card.id)){
                confirm("product already have been");
                return;
            }else{
                item.product_stor.push(pro_card);
                localStorage.setItem("sign-up" , JSON.stringify(product_favorite));
            }

        }
    })
    

    
}

// ********************************************************** search

let main_input = document.querySelector("#main-input");
    let box_product = document.querySelectorAll(".box-product-favorite")
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
       
        localStorage.clear();
        setTimeout(()=>{
            window.location = "sign-up.html";
        }, 1500)
    });


// ********************************************************************* get user to show in padge

let name_profile = document.querySelector(".name-profile");
name_profile.innerHTML = user;