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
  window.scrollTo({
    top: 700,
    behavior: "smooth"
  })
}

function hideDesktopBar() {
  document.getElementById("desktop-bar").style.display = "none";
}