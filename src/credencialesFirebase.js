// Aquí vas a poner tus credenciales de Firebase

// El ejemplo de las credenciales del profe. Llenar con sus credenciales

// const firebaseConfig = {
//     apiKey: "AIzaSyAe6A3fntQHNsrgL-FyRpOYpwHxSMenqtM",
//     authDomain: "react-flex-57915.firebaseapp.com",
//     projectId: "react-flex-57915",
//     storageBucket: "react-flex-57915.appspot.com",
//     messagingSenderId: "660644246128",
//     appId: "1:660644246128:web:3a2ae27750707f4b5cbab5"
// };


const firebaseConfig = {
    apiKey: "AIzaSyD7KnvCT7cjhRnBNRzik7kRIBXfXFCkZHY",
    authDomain: "proyecto-react-3b52.firebaseapp.com",
    projectId: "proyecto-react-3b52",
    storageBucket: "proyecto-react-3b52.firebasestorage.app",
    messagingSenderId: "267860374075",
    appId: "1:267860374075:web:11160ac52aa7336ddd621e"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar Firestore
const db = firebase.firestore();