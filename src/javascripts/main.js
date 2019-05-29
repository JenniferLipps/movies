import 'bootstrap';
import '../styles/main.scss';
import firebase from 'firebase/app';
import apiKeys from './helpers/data/apiKeys';
import authBuilder from './components/auth/auth';
import navBar from './components/myNavBar/myNavBar';
import authData from './helpers/data/authData';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authBuilder.authStringBuilder();
  navBar.navBarEvents();
  authData.checkLoginStatus();
};

init();
