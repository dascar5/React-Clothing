/** @format */

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBBBkvPvnqVTovqR5isXtcMjY3ZjN3YNFI',
  authDomain: 'react-clothing-1bbd6.firebaseapp.com',
  projectId: 'react-clothing-1bbd6',
  storageBucket: 'react-clothing-1bbd6.appspot.com',
  messagingSenderId: '74490127463',
  appId: '1:74490127463:web:68f93e6397e6093dc160c2',
  measurementId: 'G-HD8455BJMR',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
