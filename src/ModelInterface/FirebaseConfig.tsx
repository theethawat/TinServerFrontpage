import Firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyBhY4oZHA7hW20GZ61ullpx8ei_ixnzRjE",
  authDomain: "theethawatapp.firebaseapp.com",
  databaseURL: "https://theethawatapp.firebaseio.com",
  projectId: "theethawatapp",
  storageBucket: "theethawatapp.appspot.com",
  messagingSenderId: "657980256737",
  appId: "1:657980256737:web:d55374962b1e5354"
}
var firebase = Firebase.initializeApp(firebaseConfig)
var database = firebase.database()
export default database
