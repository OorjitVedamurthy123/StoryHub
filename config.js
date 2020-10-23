import firebase from 'firebase'
require("@firebase/firestore")


//initialize firebase
var firebaseConfig = {
  apiKey: "AIzaSyA-5m_1Qjh8vo22rZYrXRGjYv1DvBOhS3Q",
  authDomain: "story-hub-3f336.firebaseapp.com",
  databaseURL: "https://story-hub-3f336.firebaseio.com",
  projectId: "story-hub-3f336",
  storageBucket: "story-hub-3f336.appspot.com",
  messagingSenderId: "19062971469",
  appId: "1:19062971469:web:bd530bd24af1b2128bd004"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()