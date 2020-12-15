import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDPxfEwhS0IGRZbDTZhPwR-OJYxMEhd_B8",
    authDomain: "crwn-db-a10f1.firebaseapp.com",
    databaseURL: "https://crwn-db-a10f1.firebaseio.com",
    projectId: "crwn-db-a10f1",
    storageBucket: "crwn-db-a10f1.appspot.com",
    messagingSenderId: "141214366600",
    appId: "1:141214366600:web:52ac96e9b2ae599737583d",
    measurementId: "G-1N21LKTRTG"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error){
        console.log('error creating user profile',error.message);
      }
    }

    return userRef;
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;