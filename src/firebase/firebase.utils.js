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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
