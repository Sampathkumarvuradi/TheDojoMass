import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { auth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3w3u2V01m5WU4gdlkt0gp2zuJiUnm814",
  authDomain: "thedojomass.firebaseapp.com",
  projectId: "thedojomass",
  storageBucket: "thedojomass.appspot.com",
  messagingSenderId: "1095686456512",
  appId: "1:1095686456512:web:2f376cdb655455014a9925",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const projectFirestore = getFirestore();
const projectAuth = auth();

// timestamp
const timestamp = Timestamp;

export { projectAuth, projectFirestore, timestamp };
