import firebaseConfig from "./Firebase.con";
import { initializeApp } from "firebase/app";

const initialozeAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default initialozeAuthentication;
