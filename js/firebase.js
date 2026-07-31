// Firebase読み込み
import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";

import {
getAuth
}
from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";


// Firebase設定

const firebaseConfig = {

  apiKey: "AIzaSyClRm-_5xVTklFMyO-BJEj7L5m6QD3IAmk",
  authDomain: "qb-sotsushi-online.firebaseapp.com",
  projectId: "qb-sotsushi-online",
  storageBucket: "qb-sotsushi-online.firebasestorage.app",
  messagingSenderId: "956667713960",
  appId: "1:956667713960:web:a8e17f78ca12b7eb28e59d",
  measurementId: "G-5F28NCSWSN"

};


// Firebase開始

const app = initializeApp(firebaseConfig);


// 認証

const auth = getAuth(app);


// 他のファイルで使えるようにする

export { auth };
