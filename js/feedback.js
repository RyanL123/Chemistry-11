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

var database = firebase.database();


function submitFeedback(){
    // get feedback type and text
    let message = document.getElementById("feedback-text").value;
    let selector = document.getElementById("feedback-type");
    let selectedValue = selector.options[selector.selectedIndex].text;
    let ref = database.ref(selectedValue);

    // get current time
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    } 
    if (mm < 10) {
        mm = '0' + mm;
    } 
    today = dd + '/' + mm + '/' + yyyy;

    // create feedback message with time and push to database
    let feedback = {
        text: message,
        date: today
    }
    ref.push(feedback);
    alert("Your feedback has been recorded");
}