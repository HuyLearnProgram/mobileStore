const toggle = document.querySelector('.toggle');
const toggle1 = document.querySelector('.position-1-label');
const toggle2 = document.querySelector('.position-2-label');
toggle.addEventListener('click',function(e){
    e.preventDefault();
    const stricker = e.target;
    if(stricker === toggle1){
        toggle.classList.add('position-1-actived');
        toggle.classList.remove('position-2-actived')
    }
    if(stricker === toggle2){
        toggle.classList.add('position-2-actived');
        toggle.classList.remove('position-1-actived')
    }

})