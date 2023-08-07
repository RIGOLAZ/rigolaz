// import firebase from '@firebase/app'
import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
apiKey: "AIzaSyBi-m6lKh4YUh_Wy2jTZLACZkUJ1rHtYAk",
authDomain: "rigolaz-c5df3.firebaseapp.com",
databaseURL: "https://rigolaz-c5df3.firebaseio.com",
projectId: "rigolaz-c5df3",
storageBucket: "rigolaz-c5df3.appspot.com",
messagingSenderId: "63006024024",
appId: "1:63006024024:web:a2831c98d1b2c9c8b5c52d",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
// timestamp
const timestamp = firebase.firestore.Timestamp();

export { projectFirestore, projectAuth, timestamp, firebase }