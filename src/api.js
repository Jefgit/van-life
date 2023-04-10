// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    getDocs, 
    getDoc, 
    doc,
    query,
    where 
    } 
from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx1uCuEdOsrY2Kq09ZO99u7peMRHWhtKQ",
  authDomain: "vanlife-fc6e0.firebaseapp.com",
  projectId: "vanlife-fc6e0",
  storageBucket: "vanlife-fc6e0.appspot.com",
  messagingSenderId: "539499703855",
  appId: "1:539499703855:web:fcf0f38791b78025bce0da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans")

export async function getVans(){
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function getVan(id){
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    return{
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}

export async function getHostVans(){
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()
    
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}