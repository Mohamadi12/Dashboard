// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "twitter-8f048.firebaseapp.com",
  projectId: "twitter-8f048",
  storageBucket: "twitter-8f048.appspot.com",
  messagingSenderId: "973114238876",
  appId: "1:973114238876:web:7b2571522d210bfc428a59"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read;
//       allow write: if
//       request.resource.size < 100 * 1024 * 1024 &&
//       request.resource.contentType.matches('image/.*')
//     }
//   }
// }