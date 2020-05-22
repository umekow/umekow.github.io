const navbar = document.querySelector('#navigation-container');
var sticky = navbar.offsetTop; 

window.onscroll = function(){
    this.off_set();
}


function off_set(){
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
    }
}

 