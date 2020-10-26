import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAi6v-qZ2fih7hcgDi70OW8qaqWWsFX5bM",
    authDomain: "fb-clone-55e11.firebaseapp.com",
    databaseURL: "https://fb-clone-55e11.firebaseio.com",
    projectId: "fb-clone-55e11",
    storageBucket: "fb-clone-55e11.appspot.com",
    messagingSenderId: "84679540341",
    appId: "1:84679540341:web:1c93834fae2809f45d423c",
    measurementId: "G-9GWY0PS70Y"
  }

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()
const provider=new firebase.auth.GoogleAuthProvider()

export {auth,provider}
export default db