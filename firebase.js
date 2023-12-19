

const firebaseConfig = {
    apiKey : "AIzaSyDbCZxOmijmeGzAzW1dgO_JDMrPNByF_V0",
    authDomain: "waningjackloginpage.firebaseapp.com",
    projectId: "waningjackloginpage",
    storageBucket: "waningjackloginpage.appspot.com",
    messagingSenderId: "81305134840",
    appId: "1:81305134840:web:aaa33939adf94c0cda7d0d",
    measurementId: "G-JVQVZLX9S9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth=getAuth(app);
