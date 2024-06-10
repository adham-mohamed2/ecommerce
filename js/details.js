let content = JSON.parse(localStorage.getItem("details"))
function show_details(){
    content.map(item=>{
        let contant_details = document.querySelector(".contant_details");
    contant_details.innerHTML = `
    
    
    <div id="${item.id}" class="row">
                <div  class="left-details-section mb-4 mb-lg-0 col-lg-5">
                    <div class="main-img w-100">
                        <img class="img-main-img w-100" src="${item.img}" alt="">
                    </div>
                    <div class="other-img">
                        <img onclick="change_img(this.src)" src="img/product/product-2.jpg" alt="">
                        <img onclick="change_img(this.src)" src="img/product/product-3.jpg" alt="">
                        <img onclick="change_img(this.src)" src="img/product/product-6.jpg" alt="">
                        <img onclick="change_img(this.src)" src="img/product/product-7.jpg" alt="">
                    </div>
                </div>
                <div class="col-lg-7 right-details-section">
                    <h4 id="${item.category}" class="name-product">${item.name}</h4>
                    <div class="start-group  d-flex align-items-center gap-1 mt-3 mb-4">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div class="price-section d-flex align-items-center gap-3">
                        <span class="new-price">${item.price}</span>
                        <span class="old-price">${item.old_price}</span>
                    </div>
                    <div class="text my-3">
                        <div class="statue">Avalible : <span>stock</span></div>
                        <p class="my-3">Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, unde! ipsum dolor sit amet consectetur adipisicing elit. Odit magnam quasi dolor earum, blanditiis amet voluptatum est voluptate dolore laboriosam?</p>
                        <h3 class="text-capitalize">Harry up! only 98 product left in stock</h3>
                    </div>
                    <button onclick="add_product(this.parentElement)" class="btn-add-card btn mb-4 text-capitalize">add to card <i class="fa-solid fa-star-half-stroke"></i></button>
                    <div class="social-link d-flex align-items-center gap-2">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-solid fa-share"></i>
                        <i class="fa-solid fa-location-dot"></i>
                        <span class="add_favorite"><i class="fa-solid fa-heart"></i></span>
                    </div>
                </div>
            </div>
    `
    })
}
show_details();

// ************************************************************* change img src

function change_img(src){
    let main_img = document.querySelector(".img-main-img");
    main_img.src = src;
}

// ******************************************************************** show product carousel
let content_carousel = document.querySelector(".content-carousel");
    function scrolll(){
        content_carousel.scrollBy(350 , 0)
    }
    function scrollr(){
        content_carousel.scrollBy(-350 , 0)
    }


try{
    function showdata_sale(){
        let container = document.querySelector(".content-carousel");
        product.map(item=>{
            let discount = Math.floor((item.old_price - item.price) / item.old_price * 100);
            container.innerHTML += `
                <div id="${item.id}" class="card product-card p-md-3 text-center">
                    <div class="image-card position-relative">
                        <img class="card-img" src="${item.img}" alt="">
                        <img src="${item.img_hover}" alt="" class="img-hover">
                    </div>
                    <div class="card-body px-sm-0">
                    <div id="${item.category}" onclick="details(this.parentElement)" class="card-title">${item.name}</div>
                        <div class="card-stars d-flex align-items-center justify-content-center gap-1 my-3 ">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <span class="add_favorite my-2 d-block"><i class="fa-solid fa-heart"></i></span>
                        <div class="card-price">
                            <span class="new-price me-2">$${item.price}</span>
                            <span class="old-price">$${item.old_price}</span>
                        </div>
                        <div class="card-social">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-solid fa-share"></i>
                            <i class="fa-solid fa-location-dot"></i>
                            <i class="fa-solid fa-heart"></i>
                            <span class="add_to_card"><i class="fa-solid fa-cart-shopping"></i></span>
                        </div>
                    </div>
                    <span class="discount">${discount}%</span>
                </div>
                
            `
        })
    }
    }catch(e){
        console.log(e);
    }
    showdata_sale();
    

// ************************************************************** add product to card
// let user = localStorage.getItem("username_user");
// let sin_up = JSON.parse(localStorage.getItem("sign-up"));
    function add_product(parentElement){
        if(user == null){
            confirm("please sign-up to use this website");
        }else{
            let card_content = document.querySelector(".card-content");
            let parent = parentElement.parentElement;
            let name = parent.querySelector(".name-product").innerHTML;
            let category = parent.querySelector(".name-product").id;
            let img = parent.querySelector(".img-main-img").src;
            let price = parent.querySelector(".new-price").innerHTML;
            let id = parent.id;
            let pro_item = {name , price , img , id , category};
            sin_up.find((item)=>{
                if(item.username == user){
                    if(item.product_stor.find(el=>el.id == pro_item.id)){
                        confirm("product already have been");
                        return;
                    }else{
                        item.product_stor.push(pro_item)
                        card_content.innerHTML +=`
                            <div class="box">
                                    <div class="image">
                                        <img src="${img}" alt="">
                                    </div>
                                    <div class="title-box">
                                        <h4  class="product-name mb-2">${name}</h4>
                                        <span class="product-price">${price}</span>
                                    </div>
                                    <button onclick=" remove_product(this.parentElement)" class="remove-item"><i class="fa-solid fa-trash"></i></button>
                                </div>
                            `
                        localStorage.setItem("sign-up" , JSON.stringify(sin_up))
                    }
        
                    
                }
            })
            
        }
        
    }



// // ************************************************************************************* add  to favorite

    let add_favorite = document.querySelectorAll(".add_favorite");
add_favorite.forEach((item)=>{
    item.addEventListener("click" , add_to_favorite)
})

function add_to_favorite(){
    if(user == null){
        confirm("please sign-up to use this website");
        
    }else{
        let parent = this.parentElement;
        let parent2 = parent.parentElement;
        let parent3 = parent2.parentElement;
        let el_favorite = parent2.querySelector(".add_favorite");
        el_favorite.style.color = "red";
        let img = parent3.querySelector(".img-main-img").src;
        let name = parent3.querySelector(".name-product").innerHTML;
        let category = parent3.querySelector(".name-product").id;
        let price = parent3.querySelector(".new-price").innerHTML;
        let id = parent3.id;
        let pro_fevorite = {img , name , price , id , category}
        sin_up.find((item)=>{
            if(item.username == user){
                if(item.favorite.find(el=>el.id == pro_fevorite.id)){
                    confirm("product already added to favorite");
                    return;
                }
                else{
                    item.favorite.push(pro_fevorite);
                    localStorage.setItem("sign-up" , JSON.stringify(sin_up));
                }
            }
        })
    }
}

