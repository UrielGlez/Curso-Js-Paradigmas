import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBi4gL5j11uX92pph4kio46PoULil2DtPY",
    authDomain: "list-todo-7588a.firebaseapp.com",
    databaseURL: "https://list-todo-7588a.firebaseio.com",
    projectId: "list-todo-7588a",
    storageBucket: "list-todo-7588a.appspot.com",
    messagingSenderId: "27951500480",
    appId: "1:27951500480:web:631d1f62820d4a6803f125"
  };

  firebase.initializeApp(firebaseConfig);

  export {firebase};