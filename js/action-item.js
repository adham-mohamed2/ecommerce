
// open and close card

let close_card = document.querySelector(".close-cart");
let open_card = document.querySelector(".icon-card");
let card = document.querySelector(".cart");
close_card.addEventListener("click" , (e)=>{
    e.preventDefault();
    card.style.right="-120%";
})
open_card.addEventListener("click" , (e)=>{
    e.preventDefault();
    card.style.right="0%";
})

// end open and close card
let close_menue = document.querySelector(".close-menue");
let open_menue = document.querySelector(".open-menue");
let main_link = document.querySelector("#main-link-header");
close_menue.addEventListener("click" , (e)=>{
    e.preventDefault();
    main_link.style.left="-420px";
})
open_menue.addEventListener("click" , (e)=>{
    console.log("hello")
    e.preventDefault();
    main_link.style.left="0%";

})





// *********************************************************************
document.addEventListener('DOMContentLoaded',loadproduct);

function loadproduct(){
    loadcontent();
};
function loadcontent(){
    // add product to card
    let icon_add_card = document.querySelectorAll(".add_to_card");
    icon_add_card.forEach(item =>{
        item.addEventListener("click" , add_to_card);
    })
    // add product to favorite

    let add_favorite = document.querySelectorAll(".add_favorite");
    add_favorite.forEach((item)=>{
        item.addEventListener("click" , getfavorite )
    }) 
    // remove product from card

    let remove_product_card = document.querySelectorAll(".remove-item");
    remove_product_card.forEach(item =>{
        item.addEventListener("click" , remove_product)
    })

    // search product in padge all product


    // calculate total price in card

    gettotal()
}

// ************* variable
let card_content = document.querySelector(".card-content");
let number_item_in_card = document.querySelector(".number_item_in_card");
let count_card = document.querySelector(".count-card");
let container_array;// array


// ************ check if found product in localstorage

    let sin_up = JSON.parse(localStorage.getItem("sign-up"));
    let user = localStorage.getItem("username_user");
    if(localStorage.getItem("sign-up")){
    sin_up.find((item)=>{
        if(item.username == user){
            item.product_stor.map((item)=>{
                card_content.innerHTML +=`
                    <div id="${item.id}" class="box">
                        <div class="image">
                            <img src="${item.img}" alt="">
                        </div>
                        <div class="title-box">
                            <h4 class="product-name">${item.name}</h4>
                            <span class="product-price mt-3">${item.price}</span>
                        </div>
                        <button class="remove-item"><i class="fa-solid fa-trash"></i></button>
                    </div>
                `
            })
        }
    })
    try{
        function add_to_card(){
            let parent = this.parentElement;
            let parent2 = parent.parentElement;
            let parent3 = parent2.parentElement;
            
            let name = parent3.querySelector(".card-title").innerHTML;
            let category = parent3.querySelector(".card-title").id;
            let img = parent3.querySelector(".card-img").src;
            let price = parent3.querySelector(".new-price").innerHTML;
            let id = parent3.id;
            let product_pro = {name , img , price , id , category};
        
            sin_up.find((item)=>{ 
                if(item.username == user){
                    if(item.product_stor.find(el => el.id == product_pro.id)){
                        confirm("product already have been");
                        return;
                    }
                    else{
                        item.product_stor.push(product_pro);
                        localStorage.setItem("sign-up" , JSON.stringify(sin_up));
                        card_content.innerHTML +=`
                            <div id="${id}" class="box">
                                <div class="image">
                                    <img src="${img}" alt="">
                                </div>
                                <div class="title-box">
                                    <h4 class="product-name mb-2">${name}</h4>
                                    <span class="product-price">${price}</span>
                                </div>
                                <button class="remove-item"><i class="fa-solid fa-trash"></i></button>
                            </div>
                        `
                    }
                    
                }
            })

            sin_up.find((item)=>{
                if(item.username == user){
                    count_card.innerHTML = item.product_stor.length;
                    number_item_in_card.innerHTML = `(${item.product_stor.length} item in card)`;
                }
            })

            loadcontent();
        }
    }
    catch(e){
        console.log(e);
    }
}


// ************************************************************************************* remove product from card
try{
function remove_product(){
    if(confirm('Are you sure to remove item')){
        let id = this.parentElement.id;
        console.log(id);
        sin_up.map((item)=>{
            item.product_stor = item.product_stor.filter((el)=>el.id != id)
                this.parentElement.remove();
                item.product_stor.splice(1 , this.parentElement.remove());
                localStorage.setItem("sign-up" , JSON.stringify(sin_up));
            
        })
        
        loadcontent();
    }
    
}
}catch(e){
    console.log(e);
}

// *************************************************************************************get total product
try{
function gettotal(){
    let total_price = document.querySelector(".total-price-card");
    let price_card_head = document.querySelector(".price-card-head");
    let card_box = document.querySelectorAll(".box");
    let total = 0;
    card_box.forEach(product=>{
        let priceitem = product.querySelector(".product-price");
        let price = parseFloat(priceitem.innerHTML.replace("$" , ""));
        total += price;
    })
    total_price.innerHTML = "total : " + total + "$";
    price_card_head.innerHTML = total + "$";
    sin_up.find((item)=>{
        if(item.username == user){
            count_card.innerHTML = item.product_stor.length;
            number_item_in_card.innerHTML = `(${item.product_stor.length} item in card)`;
        }
        
    })
}
}catch(e){
    console.log(e)
}
// ************************************************************************************** show product details
try{
function details(parentElement){
    let parent = parentElement.parentElement;
    let name = parent.querySelector(".card-title").innerHTML;
    let category = parent.querySelector(".card-title").id;
    let img = parent.querySelector(".card-img").src;
    let price = parent.querySelector(".new-price").innerHTML;
    let old_price = parent.querySelector(".old-price").innerHTML;
    let id = parent.id; 
    let pro_item={name , img ,price , old_price , id , category};
    let details_array = [];
    details_array.push(pro_item);
    localStorage.setItem("details" , JSON.stringify(details_array))
    
    window.location="details.html"
}
}catch(e){
    console.log(e);
}
// ************************************************************************************************ add to favorite
try{

function getfavorite(){
    let parent = this.parentElement;
    let parent2 = parent.parentElement;
    let el_favorite = parent2.querySelector(".add_favorite");
    el_favorite.style.color = "red";
    let img = parent2.querySelector(".card-img").src;
    let name = parent2.querySelector(".card-title").innerHTML;
    let category = parent2.querySelector(".card-title").id;
    let price = parent2.querySelector(".new-price").innerHTML;
    let id = parent2.id;
    let favorite_pro = {img , name , price , id , category};

    sin_up.find(item=>{
        if(item.username == user){
            if(item.favorite.find(item => item.id == favorite_pro.id)){
                confirm("prduct already have been");
                return;
            }else{
                item.favorite.push(favorite_pro);
                localStorage.setItem("sign-up" , JSON.stringify(sin_up));
            }
        }
    })
}
}catch(e){
    console.log(e);
}


