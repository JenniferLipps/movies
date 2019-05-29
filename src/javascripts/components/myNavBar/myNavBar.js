import firebase from 'firebase/app';
import 'firebase/auth';

const navBarEvents = () => {
  const navBarLinks = document.getElementsByClassName('nav-link');
  for (let i = 0; i < navBarLinks.length; i += 1) {
    navBarLinks[i].addEventListener('click', (e) => {
      if (e.target.parentNode.id === 'nav-logout') {
        firebase.auth().signOut();
        console.error('logged out');
      }
    });
  }
};

export default { navBarEvents };
