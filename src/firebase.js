import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCgZQU_iw6sDuvnGUz9F_toZjcUQW5TdUE",
    authDomain: "love-swipe.firebaseapp.com",
    databaseURL: "https://love-swipe.firebaseio.com",
    projectId: "love-swipe",
    storageBucket: "love-swipe.appspot.com",
    messagingSenderId: "1091822854814",
    appId: "1:1091822854814:web:7aded0d880d7b1a543918f",
    measurementId: "G-C9JTQQFWQD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;