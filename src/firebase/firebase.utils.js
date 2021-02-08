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

    const userRef = store.doc(`users/${userAuth.uid}`);

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

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef=store.collection(collectionKey);
    const batch=store.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();//doc() takes parameter as key. If left blank, firebase will generate its own unique key
      batch.set(newDocRef, obj);
    });

    return await batch.commit()
  }

  export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const {title, items} = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });

    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject)
    });
  }

  export const auth = firebase.auth();
  export const store = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;