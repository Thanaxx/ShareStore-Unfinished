  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAirA6ViZg9T4_RZu5dxnrF9XK_EHb_4F4",
    authDomain: "sharestore-557c0.firebaseapp.com",
    projectId: "sharestore-557c0",
    storageBucket: "sharestore-557c0.appspot.com",
    messagingSenderId: "810349924293",
    appId: "1:810349924293:web:e4a2cdb4acfbc6b97205ac"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //make auth provider ofr log in to Google
  const auth = firebase.auth();

  //Log in to Google
  const loginUsingGoogle = document.querySelector(".login");
  const logoutToGoogle = document.querySelector(".signout");

  const homepage= document.querySelector(".homepage");
  let mainPage = document.querySelector(".mainpage");
  let workpage = document.querySelector(".worksPage");
  const displayLogout = document.querySelector(".whenSignedIn");

  const provider = new firebase.auth.GoogleAuthProvider();
  loginUsingGoogle.onclick = () => auth.signInWithPopup(provider)
  logoutToGoogle.onclick = () => auth.signOut();

  //STREAM CHANGES ONCE LOGGED IN OR LOGGED OUT
  auth.onAuthStateChanged(user =>{
      if(user){
          //logged in
        homepage.style.display = "none";
        mainPage.style.display = "block";
        workpage.style.display = "block";
        displayLogout.hidden = false;
        // alert("Welcome! start writing your fanntacy.");
      }else{
          //logged out
        homepage.style.display = "block";
        mainPage.style.display = "none";
        workpage.style.display = "none";
        displayLogout.hidden = true;
      }
  });











  
   