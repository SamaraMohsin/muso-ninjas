import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBhcOhyknmwVjHZ4n59MC-6gY3ZZrc0ld4",
    authDomain: "muso-ninjas-eed89.firebaseapp.com",
    projectId: "muso-ninjas-eed89",
    storageBucket: "muso-ninjas-eed89.appspot.com",
    messagingSenderId: "72802453661",
    appId: "1:72802453661:web:ab3687ba0b7fe299446c74"
  };

  // init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()


// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp,projectStorage }