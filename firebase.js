import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCDUnP5yer3_lCjdSK9E-6INZm2SafGRWo',
  authDomain: 'facebook-clone-fd979.firebaseapp.com',
  projectId: 'facebook-clone-fd979',
  storageBucket: 'facebook-clone-fd979.appspot.com',
  messagingSenderId: '816457471602',
  appId: '1:816457471602:web:64ccde065662620e40d4eb',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

const storage = getStorage(app);

// const auth = getAuth(app);

export { db, storage };
