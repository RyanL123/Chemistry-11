// $(function() {
//     $(window).scroll(function () {
//        if ($(this).scrollTop() > 300) {
//           $('body').addClass('changeColor')
//        }
//        if ($(this).scrollTop() < 300 || $(this).scrollTop()> 1000) {
//           $('body').removeClass('changeColor')
//        }
//     });
//  });

// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

function smoothScroll(){
    window.scroll({
        top: 2500, 
        left: 0, 
        behavior: 'smooth'
      });
      
      // Scroll certain amounts from current position 
      window.scrollBy({ 
        top: 100, // could be negative value
        left: 0, 
        behavior: 'smooth' 
      });
      
      // Scroll to a certain element
      document.querySelector('#site-info').scrollIntoView({ 
        behavior: 'smooth' 
      });
}
