let adminInfo = [
  {
    username: "admin",
    pass: "123456",
  },
];

//local storage cho các tài khoản admin
function setListAdmin(x) {
  //Lưu trữ dữ liệu trong bộ nhớ cục bộ của trình duyệt
  window.localStorage.setItem("ListAdmin", JSON.stringify(x));
}

function getListAdmin() {
  return JSON.parse(window.localStorage.getItem("ListAdmin"));
}

// Localstorage cho dssp: 'ListProducts
function setListProducts(newList) {
  window.localStorage.setItem("ListProducts", JSON.stringify(newList));
}

function getListProducts() {
  return JSON.parse(window.localStorage.getItem("ListProducts"));
}

//Hàm khởi tạo cho tất cả các trang
function init() {
  // Lấy data từ local storage
  listProducts = getListProducts() || listProducts;
  adminInfo = getListAdmin() || adminInfo;

  setupEventAccount();
  updateInfoCurrentUser();
}

//Copy object để khồng ảnh hưởng tới bản chính
function copyObject(temp) {
  return JSON.parse(JSON.stringify(temp));
}
//Tìm kiếm theo tên
function searchByName(list, name, qty) {
  let tempList = copyObject(list);
  let result = [];
  name = name.split(" ");
  for (let sp of tempList) {
    let correct = true;
    for (let n of name) {
      if (sp.name.toUpperCase().indexOf(n.toUpperCase()) < 0) {
        correct = false;
        break;
      }
    }
    if (correct) result.push(sp);
  }
  return result;
}

//Cart number (Thêm vào giỏ hàng)
function animateCartNumber() {
  let cn = document.querySelector("#cart-total");
  cn.style.transform = "scale(2)";
  cn.style.backgroundColor = "#ff6801";
  cn.style.color = "white";
  setTimeout(function () {
    cn.style.transform = "scale(1)";
    cn.style.backgroundColor = "#ff6801";
    cn.style.color = "white";
  }, 1000);
}

function addToCart(masp, name){
  let user  = getCurrentUser();
  if (!user){
    alert("Bạn cần đăng nhập để mua hàng!");
    showAccount(true);
    return;
  }

  if (user.off){
    alert("Tài khoản bị khóa, không thể mua hàng!");
    return;
  }
  let time = new Date();
  let productExist = false;
  for (let i = 0; i<user.products.length; i++){
    //Kiểm tra xem có trùng sản phẩm trong giỏ hay không
    if (user.products[i].ma == masp) {
      user.products[i].qty++;
      productExist = true;
      break;
    }
  }
  if (!productExist) {
    // nếu không trùng thì mới thêm sản phẩm vào user.products
    user.products.push({
      ma: masp,
      qty: 1,
      date: time,
    });
}
}
