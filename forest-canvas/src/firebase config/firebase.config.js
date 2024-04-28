// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_w4IQrL6a7bX19teXlgN_gBajK2tDFQY",
  authDomain: "forest-canvas.firebaseapp.com",
  projectId: "forest-canvas",
  storageBucket: "forest-canvas.appspot.com",
  messagingSenderId: "672111943412",
  appId: "1:672111943412:web:dd54bb49933d925b9888a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;