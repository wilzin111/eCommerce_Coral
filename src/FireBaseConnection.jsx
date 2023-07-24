import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCKcAZBIOApGdoRTGy3_jKg8Yq7VGbBoPw",
  authDomain: "coral-ecommerce.firebaseapp.com",
  projectId: "coral-ecommerce",
  storageBucket: "coral-ecommerce.appspot.com",
  messagingSenderId: "1081331331609",
  appId: "1:1081331331609:web:1634dd9b1ce150c5ca7088",
  measurementId: "G-FLG8FN3FZV",
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, storage, auth };
