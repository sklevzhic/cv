import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB8UO-WqONnzca4Xv3GrU8yJnWW2T1tIVk",
    authDomain: "chat-cb8cc.firebaseapp.com",
    projectId: "chat-cb8cc",
    storageBucket: "chat-cb8cc.appspot.com",
    messagingSenderId: "753828758190",
    appId: "1:753828758190:web:c4f739d53f7bcad531233f",
    measurementId: "G-Q9ML7JD4SQ"
};


initializeApp(firebaseConfig);

const auth = getAuth()
const firestore = getFirestore()

export { auth, firestore }