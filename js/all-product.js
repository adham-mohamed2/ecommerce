let btn_showmore = document.querySelector(".show-more");
let container_product = document.querySelector(".content-right-section");
function show_product(star_number = 0 , end_number = 15){
    // product.map(item =>{
    //         let discount = Math.floor((item.old_price - item.price) / item.old_price * 100);
    //     container_product.innerHTML +=`
    //             <div id="${item.id}" class="card  px-3 py-2 box-card text-center">
    //                 <div class="image-card position-relative mb-2">
    //                     <img class="card-img" src="${item.img}" alt="">
    //                     <img src="${item.img_hover}" alt="" class="img-hover">
    //                 </div>
    //                 <div class="card-body p-0">
    //                     <div onclick="details(this.parentElement)" id="${item.category}" class="card-title">${item.name}</div>
    //                     <div class="card-stars d-flex align-items-center justify-content-center gap-1 my-3 ">
    //                         <i class="fa-solid fa-star"></i>
    //                         <i class="fa-solid fa-star"></i>
    //                         <i class="fa-solid fa-star"></i>
    //                         <i class="fa-solid fa-star"></i>
    //                         <i class="fa-solid fa-star-half-stroke"></i>
    //                     </div>
    //                     <span class="add_favorite my-2 d-block"><i class="fa-solid fa-heart"></i></span>
    //                     <div class="card-price">
    //                         <span class="new-price me-2">$${item.price}</span>
    //                         <span class="old-price">$${item.old_price}</span>
    //                     </div>
    //                     <div class="card-social">
    //                         <i class="fa-brands fa-facebook"></i>
    //                         <i class="fa-solid fa-share"></i>
    //                         <i class="fa-solid fa-location-dot"></i>
    //                         <i class="fa-solid fa-heart"></i>
    //                         <span class="add_to_card"><i class="fa-solid fa-cart-shopping"></i></span>
    //                     </div>
                        
    //                 </div>
    //                 <span class="discount">${discount}%</span>
    //         </div>
        
    //     `
        
    // })
    if(product.length >= end_number ){
        for(let i = star_number  ; i < end_number ; i++){
            let discount = Math.floor((product[i].old_price - product[i].price) / product[i].old_price * 100);
                container_product.innerHTML +=`
                        <div id="${product[i].id}" class="card  px-3 py-2 box-card text-center">
                            <div class="image-card position-relative mb-2">
                                <img class="card-img" src="${product[i].img}" alt="">
                                <img src="${product[i].img_hover}" alt="" class="img-hover">
                            </div>
                            <div class="card-body p-0">
                                <div onclick="details(this.parentElement)" id="${product[i].category}" class="card-title">${product[i].name}</div>
                                <div class="card-stars d-flex align-items-center justify-content-center gap-1 my-3 ">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <span class="add_favorite my-2 d-block"><i class="fa-solid fa-heart"></i></span>
                                <div class="card-price">
                                    <span class="new-price me-2">$${product[i].price}</span>
                                    <span class="old-price">$${product[i].old_price}</span>
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
        }
    }else{
        btn_showmore.style.display="none";
    }
    
}
show_product();


let start_number = 0;
let end_number = 15;
try{
    btn_showmore.addEventListener("click" , ()=>{
        start_number = end_number;
        end_number += 5;
        show_product(start_number , end_number);
        loadcontent();
    })
}catch(e){
    console.log(e);
}




// ********************************************************************** search section

let input_search = document.querySelector("#input-search");
let main_search = document.querySelector(".btn-main-search");
let card_title = document.querySelectorAll(".card-title");
let box_card = document.querySelectorAll(".box-card");


    main_search.addEventListener("click" , ()=>{
        
        for(let i = 0 ; i < card_title.length ; i++){
            if(card_title[i].id.toLowerCase().indexOf(input_search.value.toLowerCase()) >=0){
                box_card[i].style.display = "";
            }else{
                box_card[i].style.display="none"; 
            }
        }
    
    });   
    



let open_filter = document.querySelector(".open-filter");
let section_filter = document.querySelector(".content-left-section");
open_filter.addEventListener("click" , ()=>{
    section_filter.classList.toggle("active-filter")
})

let checkout = document.querySelector("#checkout");
checkout.addEventListener("click" , ()=>{
    window.location = "card-padge.html";
})

// ****************************************************************** button show more
