import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDHKT7dgc1615MqrFYsSpj5OMXlQMM88yY",
    authDomain: "furniclub-6cc7e.firebaseapp.com",
    projectId: "furniclub-6cc7e",
    storageBucket: "furniclub-6cc7e.appspot.com",
    messagingSenderId: "262806364135",
    appId: "1:262806364135:web:14f5f9d8f4a92905aca742",
    measurementId: "G-Y4HZKBKTFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app ;

