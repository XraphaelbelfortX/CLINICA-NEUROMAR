// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDPUpy_qv2s-t_O9cGQMxjxDzikBPRx4zI",
  authDomain: "neuromar-738a9.firebaseapp.com",
  projectId: "neuromar-738a9",
  storageBucket: "neuromar-738a9.appspot.com",
  messagingSenderId: "133139075194",
  appId: "1:133139075194:web:fc162f466187f484d3abc3",
  measurementId: "G-YF3P9QR8EV"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
