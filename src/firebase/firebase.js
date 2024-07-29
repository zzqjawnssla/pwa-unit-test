import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAsWqfb70f6qffWzhSjOlhPl3F1J271tzs",
    authDomain: "remote-unit-management-system.firebaseapp.com",
    projectId: "remote-unit-management-system",
    storageBucket: "remote-unit-management-system.appspot.com",
    messagingSenderId: "1077180716979",
    appId: "1:1077180716979:web:84d2ae964cd44579f95dc6",
    measurementId: "G-26N61EJ9VB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}