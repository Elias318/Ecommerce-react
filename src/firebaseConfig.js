
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyD7KnvCT7cjhRnBNRzik7kRIBXfXFCkZHY",
  authDomain: "proyecto-react-3b52.firebaseapp.com",
  projectId: "proyecto-react-3b52",
  storageBucket: "proyecto-react-3b52.firebasestorage.app",
  messagingSenderId: "267860374075",
  appId: "1:267860374075:web:11160ac52aa7336ddd621e"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

