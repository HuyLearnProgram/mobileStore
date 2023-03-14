const moreContainer = document.querySelector('.view-more-container');
const moreBtn = document.querySelector('#viewMoreContent');

const productContent = document.querySelector('#productContent');

moreContainer.addEventListener('click',function(e){
    e.preventDefault();
    const more = e.target;
    if(more !== moreBtn) return;
    if(more.textContent === "Xem thêm"){
        productContent.style.overflow = "auto";
        productContent.style.height = "auto";
        more.textContent = "Thu gọn";
    }else{
        productContent.style.overflow = "hidden";
        productContent.style.height = "65.2rem";
        more.textContent = "Xem thêm";   
    }
    
})