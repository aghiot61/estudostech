import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7ia-mhJ1Egblu3naDMTnzPSUdMhNoHlE",
  authDomain: "estudostech-e8b0e.firebaseapp.com",
  projectId: "estudostech-e8b0e",
  storageBucket: "estudostech-e8b0e.appspot.com",
  messagingSenderId: "240439997383",
  appId: "1:240439997383:web:f37f03a11d41ac56209fe2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };