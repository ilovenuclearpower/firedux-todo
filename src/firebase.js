import * as firebase from 'firebase';
import Config from './config.js';

firebase.initializeApp(Config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child('todos')
