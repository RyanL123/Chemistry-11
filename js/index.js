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

// Get a reference to the database service
var database = firebase.database();
var ref = database.ref("feedback");


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
  document.querySelector('#site-features').scrollIntoView({ 
    behavior: 'smooth' 
  });
}
