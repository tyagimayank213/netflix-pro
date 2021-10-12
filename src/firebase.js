import firebase from 'firebase/app'
import "firebase/firestore"
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBbJxEGX3C2EKsRVOP8MGEkILo5CqSv_O4",
  authDomain: "netflix-clone-5bd42.firebaseapp.com",
  projectId: "netflix-clone-5bd42",
  storageBucket: "netflix-clone-5bd42.appspot.com",
  messagingSenderId: "355256973275",
  appId: "1:355256973275:web:2b7d4c3bc46190385a19fe"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth };