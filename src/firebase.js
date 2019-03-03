import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDnHXEQ6o1Ha73fRpOoGaROutwyqKvmCis",
  authDomain: "firedux-todo-4d2f4.firebaseapp.com",
  databaseURL: "https://firedux-todo-4d2f4.firebaseio.com",
  projectId: "firedux-todo-4d2f4",
  storageBucket: "firedux-todo-4d2f4.appspot.com",
  messagingSenderId: "888605061127"
}

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child('todos')
