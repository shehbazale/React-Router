// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAen0aNw75reecNL6K1vpfrOe6d_RAlwIo",
    authDomain: "experizoclassapp.firebaseapp.com",
    databaseURL: "https://experizoclassapp-default-rtdb.firebaseio.com",
    projectId: "experizoclassapp",
    storageBucket: "experizoclassapp.appspot.com",
    messagingSenderId: "558307745656",
    appId: "1:558307745656:web:619d7558d8969d4ca1f28d",
    measurementId: "G-H8RHF9ZGV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app