import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyClEyCS1pSfKb1tzrJdBm-JSHGjHJtOw_c",
    authDomain: "storeitemcollection.firebaseapp.com",
    projectId: "storeitemcollection",
    storageBucket: "storeitemcollection.appspot.com",
    messagingSenderId: "832941464826",
    appId: "1:832941464826:web:f5d5169663ee408c3f7d43"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();