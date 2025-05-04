import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBJg1wu8zb6vkMT-sNoXpQV2EXPmaUGzbA",
  authDomain: "notes-70f0d.firebaseapp.com",
  databaseURL: "https://notes-70f0d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "notes-70f0d",
  storageBucket: "notes-70f0d.appspot.com",
  messagingSenderId: "61883403164",
  appId: "1:61883403164:web:fcc6ac0ab2b88f5d8e9659"
};

const app = initializeApp(firebaseConfig);

export default app;
