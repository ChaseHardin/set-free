import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyAUyTuyjkklpLtnKJIQvAAAyXuHCEeqjtA",
    authDomain: "set-free-91368.firebaseapp.com",
    databaseURL: "https://set-free-91368.firebaseio.com",
    projectId: "set-free-91368",
    storageBucket: "set-free-91368.appspot.com",
    messagingSenderId: "908451589021"
};

firebase.initializeApp(config);

export default firebase;
