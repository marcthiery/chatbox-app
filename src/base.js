import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCkmYhfILShqggrzXIfzIzuDqUPxzYgJNM',
  authDomain: 'chatbox-app-33e92.firebaseapp.com',
  databaseURL: 'https://chatbox-app-33e92.firebaseio.com'
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;
