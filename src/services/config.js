
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDYSrb-Y4q3tYRYRQmKcG2le1uGQQk1M5A",
    authDomain: "ganadosonline-56770.firebaseapp.com",
    projectId: "ganadosonline-56770",
    storageBucket: "ganadosonline-56770.appspot.com",
    messagingSenderId: "413098334893",
    appId: "1:413098334893:web:39a700e4647eeab11bc424"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)