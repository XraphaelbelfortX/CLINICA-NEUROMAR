import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyA8-jJ8g1rcqk_9k5DJJQRvG9wrtPnHioQ",
  authDomain: "neuromar-44b0c.firebaseapp.com",
  projectId: "neuromar-44b0c",
  storageBucket: "neuromar-44b0c.firebasestorage.app",
  messagingSenderId: "1037018695941",
  appId: "1:1037018695941:web:6189f069203a924e5b0f6c",
  measurementId: "G-EEZ3YQ4KMT"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 
const storage = getStorage(app);


export { auth , db, storage};