// $(function() {
//   var siteFeaturesDistance = $("#site-features").offset().top-100,
//   $window = $(window)
//   var mainContentDistance = $("#main-content").offset().top-100,
//   $window = $(window)
//     $(window).scroll(function () {
//        if ($(this).scrollTop() > siteFeaturesDistance) {
//           $('body').addClass('changeColor')
//        }
//        if ($(this).scrollTop() < siteFeaturesDistance || $(this).scrollTop() >= mainContentDistance) {
//           $('body').removeClass('changeColor')
//        }
//     });
//  });


// Firebase config
var config = {
  apiKey: "AIzaSyD-KQ_P6gYE7ZVr2NyojK70iWXs8lhXwzc",
  authDomain: "chemistry-11.firebaseapp.com",
  databaseURL: "https://chemistry-11.firebaseio.com",
  projectId: "chemistry-11",
  storageBucket: "chemistry-11.appspot.com",
  messagingSenderId: "222625517349",
  appId: "1:222625517349:web:2327d988486124b17754cc",
  measurementId: "G-V7X7633VQ3"
};
firebase.initializeApp(config);
firebase.analytics();

// Smooth scrolling
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
  document.getElementById('site-features').scrollIntoView({ 
    behavior: 'smooth',
    block: "center",
    inline: "center"
  });
}
