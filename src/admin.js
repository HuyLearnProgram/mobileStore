window.onload = function(){
    addEventChangeTab();
}
function addEventChangeTab(){
    const sidebar = document.getElementsByClassName('sidebar')[0];
    const listA = sidebar.getElementsByTagName('a');
    
    for(const a of listA){
        if(!a.onclick){
            a.addEventListener('click',function(){
                turnOffActive();
                this.classList.add('active');
                const tab = this.childNodes[1].data.trim();
                openTab(tab);
            })
        }
    }
}

function turnOffActive(){
    const sidebar = document.getElementsByClassName('sidebar')[0];
    const listA = sidebar.getElementsByTagName('a');
    for(const a of listA){
        a.classList.remove('active');
    }
}

function openTab(tabName){
    const main = document.getElementsByClassName('main')[0].children;
    for(const e of main){
        e.style.display = 'none';
    }

    switch(tabName){
        case 'Trang Chủ':{
            document.getElementsByClassName('home')[0].style.display = 'block';
            break;
        }
        case 'Sản Phẩm':{
            document.getElementsByClassName('sanpham')[0].style.display = 'block';
            break;
        }
        case 'Đơn Hàng':{
            document.getElementsByClassName('donhang')[0].style.display = 'block';
            break;
        }
        case 'Khách Hàng':{
            document.getElementsByClassName('khachhang')[0].style.display = 'block';
            break;
        }
    }
}
function addKhungSuaSanPham(msp){
    document.getElementById('khungSuaSanPham').style = "transform: scale(1)";
}