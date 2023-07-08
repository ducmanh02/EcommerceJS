// Script for navigation bar

const mobile_bar = document.getElementById("mobile_bar");
const header_navbar = document.getElementById("header_navbar");
const close_header_navbar = document.getElementById("close_header_navbar");

if(mobile_bar ) {
    mobile_bar.addEventListener("click", () =>{
        header_navbar.style.right = "0";
        
    });
}
if(close_header_navbar) {
    close_header_navbar.addEventListener("click", () =>{
        header_navbar.style.right = "-300px";
       
    });
}

const navigatorProduct = document.querySelectorAll('.product');

navigatorProduct.forEach(element => {
  element.addEventListener('click', function() {
    window.location.href = 'sproduct.html';
  });
});
