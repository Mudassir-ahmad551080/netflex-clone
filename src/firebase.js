
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyA3utQ6quoyhHllrLh_AZ8-FxANg0D4WBA",
  authDomain: "netflex-clone-fa33c.firebaseapp.com",
  projectId: "netflex-clone-fa33c",
  storageBucket: "netflex-clone-fa33c.firebasestorage.app",
  messagingSenderId: "690714792899",
  appId: "1:690714792899:web:4b9b29658375bfb2b96376",
  measurementId: "G-RR7FTNY35Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Add user data to Firestore
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    console.log("User signed up and data saved:", user);
    toast.success("User signed up successfully!");
  } catch (error) {
    console.error("Error signing up:", error);
    toast.error(error.code.replace("auth/", "").replaceAll("-", " "));

  }
}

const userLogin = async (email, password) => {
    try {
       await signInWithEmailAndPassword(auth, email, password)
        toast.success("User logged in successfully!");
    } catch (error) {
        console.error("Error logging in:", error);
       toast.error(error.code.replace("auth/", "").replaceAll("-", " "));

    }
}

const logout =() => {
    signOut(auth)
}

export {  auth, db, signUp, userLogin, logout };
