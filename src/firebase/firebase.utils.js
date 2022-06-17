import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDqHE4ji6_w9r2L6d-TQe5_0gjniuJU9W0",
  authDomain: "crwn-clothing-kami.firebaseapp.com",
  projectId: "crwn-clothing-kami",
  storageBucket: "crwn-clothing-kami.appspot.com",
  messagingSenderId: "428342115338",
  appId: "1:428342115338:web:2a60e2cdfce640797f73f3"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  'prompt': 'select_account',
  'login_hint': 'user@example.com'
});

export const signInWithGoogle = () => signInWithPopup(auth, provider)

export default app;