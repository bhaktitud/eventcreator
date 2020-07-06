import firebase from 'firebase/app'
import 'firebase/storage'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDgzuz2qHRQd6pjvkk2ULp-wLKlDfg_zK4",
    authDomain: "cloudstore-4cb34.firebaseapp.com",
    databaseURL: "https://cloudstore-4cb34.firebaseio.com",
    projectId: "cloudstore-4cb34",
    storageBucket: "cloudstore-4cb34.appspot.com",
    messagingSenderId: "357748634759",
    appId: "1:357748634759:web:20af6aab611f61e2a33422"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export {
    storage, firebase as default
}