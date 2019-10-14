import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBkk9QfBwy2LGt3xBb2aUo8vCa-zMUsliI',
  authDomain: 'desafiomobills-1d0fb.firebaseapp.com',
  databaseURL: 'https://desafiomobills-1d0fb.firebaseio.com',
  projectId: 'desafiomobills-1d0fb',
  storageBucket: 'desafiomobills-1d0fb.appspot.com',
  messagingSenderId: '703217463433',
  appId: '1:703217463433:web:09cc3cb594253f01841658',
  measurementId: 'G-HPTMVLXYX0',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
