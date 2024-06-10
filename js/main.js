
// start scroll section carousel product

    let content_carousel = document.querySelector(".content-carousel");
    function scrolll(){
        content_carousel.scrollBy(350 , 0)
    }
    function scrollr(){
        content_carousel.scrollBy(-350 , 0)
    }

    let content_product = document.querySelector(".contant-product");
    function scrollll(){
        content_product.scrollBy(350 , 0)
    }
    function scrollrr(){
        content_product.scrollBy(-350 , 0)
    }

    let ccontant_product_elctronic = document.querySelector(".contant-product-elctronic");
    function scrolllll(){
        ccontant_product_elctronic.scrollBy(350 , 0)
    }
    function scrollrrr(){
        ccontant_product_elctronic.scrollBy(-350 , 0)
    }


// end scroll section carousel product
try{
function showdata_sale(){
    let container = document.querySelector(".content-carousel");
    console.log(container)
    product.map(item=>{
        let discount = Math.floor((item.old_price - item.price) / item.old_price * 100);
        container.innerHTML += `
            <div id="${item.id}" class="card product-card p-md-3 text-center">
                <div class="image-card position-relative">
                    <img class="card-img" src="${item.img}" alt="">
                    <img src="${item.img_hover}" alt="" class="img-hover">
                </div>
                <div class="card-body px-sm-0">
                <div onclick="details(this.parentElement)" class="card-title">${item.name}</div>
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

try{
function showdata(){
    let container = document.querySelector(".contant-product");
    product.map(item=>{
        container.innerHTML += `
            <div id="${item.id}" class="card product-card p-md-3 text-center">
                <div class="image-card position-relative">
                    <img class="card-img" src="${item.img}" alt="">
                    <img src="${item.img_hover}" alt="" class="img-hover">
                </div>
                <div class="card-body">
                    <div class="card-title">${item.name}</div>
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
                    </div>
                    <div class="card-social">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-solid fa-share"></i>
                        <i class="fa-solid fa-location-dot"></i>
                        <i class="fa-solid fa-heart"></i>
                        <span class="add_to_card"><i class="fa-solid fa-cart-shopping"></i></span>
                    </div>
                </div>
            </div>
        
        `
    })
}
}catch(e){
    console.log(e);
}
showdata();
try{
function showdata_elctronic(){
    let container = document.querySelector(".contant-product-elctronic");
    product.map(item=>{
        container.innerHTML += `
            <div id="${item.id}" class="card product-card p-md-3 text-center">
                <div class="image-card position-relative">
                    <img class="card-img" src="${item.img}" alt="">
                    <img src="${item.img_hover}" alt="" class="img-hover">
                </div>
                <div class="card-body">
                    <div class="card-title">${item.name}</div>
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
                    </div>
                    <div class="card-social">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-solid fa-share"></i>
                        <i class="fa-solid fa-location-dot"></i>
                        <i class="fa-solid fa-heart"></i>
                        <span class="add_to_card"><i class="fa-solid fa-cart-shopping"></i></span>
                    </div>
                </div>
            </div>
        `
    })
}
}catch(e){
    console.log(e);
}
showdata_elctronic();

let checkout = document.querySelector("#checkout");
checkout.addEventListener("click" , ()=>{
    window.location = "card-padge.html";
})