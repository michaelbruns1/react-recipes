// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
console.log(initializeApp);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDu9gUBAUZkGtgA-hQSXnCDfCuNbxW02O0',
  authDomain: 'cards-324b3.firebaseapp.com',
  projectId: 'cards-324b3',
  storageBucket: 'cards-324b3.appspot.com',
  messagingSenderId: '154431859846',
  appId: '1:154431859846:web:07d04ff59fe7ac94747507',
  measurementId: 'G-545SRTSF2J',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
