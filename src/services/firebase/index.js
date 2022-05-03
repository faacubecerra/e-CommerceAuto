import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
apiKey: "AIzaSyAqwu354Z-FEH0cHbhdCa08mui-A3q_iWU",
authDomain: "e-commerceauto.firebaseapp.com",
projectId: "e-commerceauto",
storageBucket: "e-commerceauto.appspot.com",
messagingSenderId: "609317270235",
appId: "1:609317270235:web:06913ce3b96236a9c812fe"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)