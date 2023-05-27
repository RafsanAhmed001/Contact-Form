const firebaseConfig = {
    apiKey: "AIzaSyDhUYl0cDiHIDnBLMvQuYMj48pSPPiQj7Q",
    authDomain: "contactform-bcc8c.firebaseapp.com",
    databaseURL: "https://contactform-bcc8c-default-rtdb.firebaseio.com",
    projectId: "contactform-bcc8c",
    storageBucket: "contactform-bcc8c.appspot.com",
    messagingSenderId: "893449042239",
    appId: "1:893449042239:web:9f37f5c1a3ace8341e3b8a"
  };
  
  // initialize firebase 
  firebase.initializeApp(firebaseConfig);

  // reference to your database
  var contactFormDB = firebase.database().ref("contactForm");

  document.getElementById('contactForm').addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages (name, emailid,msgContent);
  // enable alert
  document.querySelector(".alert").style.display = "block";

  // remove the alert
  setTimeout(() => { 
  document.querySelector(".alert").style.display = "none";
}, 3000);

// rest the form
document.getElementById("contactForm").reset();

}
  


const saveMessages = (name, emailid, msgContent) => {
  var newCntactForm = contactFormDB.push();

  newCntactForm.set({
    name : name,
    emailid : emailid,
    msgContent : msgContent,
  })
};

const getElementVal = (id) =>{
  return document.getElementById(id).value; 
  };




  