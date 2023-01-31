import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC39gKurci-DxOk3BMSW18Cg4W6Zigwf9o",
    authDomain: "shopping-cart-app-39e2a.firebaseapp.com",
    projectId: "shopping-cart-app-39e2a",
    storageBucket: "shopping-cart-app-39e2a.appspot.com",
    messagingSenderId: "766862978027",
    appId: "1:766862978027:web:c612b866ee8cd6201107ae"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db