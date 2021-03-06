import firebase from 'firebase/app';
import 'firebase/auth';
import googleButton from './login.png';
import util from '../../helpers/util';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const authStringBuilder = () => {
  let domString = '<button id="authGoogle" class="btn btn-warning">';
  domString += `<img src=${googleButton}>`;
  domString += '</button>';
  util.printToDom('auth', domString);
  document.getElementById('authGoogle').addEventListener('click', signMeIn);
};

export default { authStringBuilder };
