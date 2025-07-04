import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKP5H_6g_h_jDYPLMC50Zj8juNDPRsET0",
  authDomain: "avocado-sushi-cms.firebaseapp.com",
  projectId: "avocado-sushi-cms",
  storageBucket: "avocado-sushi-cms.firebasestorage.app",
  messagingSenderId: "771086941039",
  appId: "1:771086941039:web:b145c476f000a7485b469a",
  measurementId: "G-GH51LLJ7Q6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)