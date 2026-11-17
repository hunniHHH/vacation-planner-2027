// 1) Paste the "firebaseConfig" values from Firebase console → Project settings → Your apps → Web app.
//    (These values are safe to publish — access is controlled by firestore.rules.)
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDePOEmFOt7hgyXaLDj0bz5DvA0iGdMdyw",
  authDomain: "vacation-planner-2027-3cb99.firebaseapp.com",
  projectId: "vacation-planner-2027-3cb99",
  storageBucket: "vacation-planner-2027-3cb99.firebasestorage.app",
  messagingSenderId: "695047407081",
  appId: "1:695047407081:web:102e7da55a22b3e9ee3778"
};

// 2) The two manager logins (create these users in Firebase → Authentication → Users).
//    Must match the emails in firestore.rules.
export const MANAGER_EMAILS = {
  areef: "areef.mohamed1994@gmail.com",
  alim:  "aaalimu@gmail.com"
};
