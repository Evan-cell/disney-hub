import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA8_wPwPqfN6RrYds8WJSKPhKGOEnLm3K8",
    authDomain: "disney-build-4e805.firebaseapp.com",
    projectId: "disney-build-4e805",
    storageBucket: "disney-build-4e805.appspot.com",
    messagingSenderId: "363992965019",
    appId: "1:363992965019:web:14a1355582b06cead60b3e",
    measurementId: "G-M1KNJYS3R3"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db; 