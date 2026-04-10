import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCIS1GZk6x89ITAIAaxaHxg_w00mcv2J-k",
  authDomain: "pakanku-app.firebaseapp.com",
  projectId: "pakanku-app",
  storageBucket: "pakanku-app.firebasestorage.app",
  messagingSenderId: "600847552162",
  appId: "1:600847552162:web:7c2e8b5c4612554ca291fb",
};

const app = initializeApp(firebaseConfig);

export default app;
