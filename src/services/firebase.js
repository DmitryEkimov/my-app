import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB4YX_KI3i0UT138PHnnkAu7safWQE2kA8",
    authDomain: "pokemon-game-f6d41.firebaseapp.com",
    databaseURL: "https://pokemon-game-f6d41-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-f6d41",
    storageBucket: "pokemon-game-f6d41.appspot.com",
    messagingSenderId: "195217319351",
    appId: "1:195217319351:web:bcb0b027388b72d2f2f432"
  };

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = firebase.database();

export default database;