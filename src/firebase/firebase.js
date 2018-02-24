import * as firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyCObtDphupmgDbJHTU_2QhPt0eP2RGCzbQ",
    authDomain: "react-firebase-ed54c.firebaseapp.com",
    databaseURL: "https://react-firebase-ed54c.firebaseio.com",
    projectId: "react-firebase-ed54c",
    storageBucket: "",
    messagingSenderId: "751175451461"
}

const devConfig = {
    apiKey: "AIzaSyCObtDphupmgDbJHTU_2QhPt0eP2RGCzbQ",
    authDomain: "react-firebase-ed54c.firebaseapp.com",
    databaseURL: "https://react-firebase-ed54c.firebaseio.com",
    projectId: "react-firebase-ed54c",
    storageBucket: "",
    messagingSenderId: "751175451461"
}

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};



  
    
  
