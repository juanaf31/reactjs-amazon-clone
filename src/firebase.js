import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDiFaSvAusKgXvwQjWmSXoNEcoJyqRxIfM',
	authDomain: 'clone-38c6d.firebaseapp.com',
	databaseURL: 'https://clone-38c6d.firebaseio.com',
	projectId: 'clone-38c6d',
	storageBucket: 'clone-38c6d.appspot.com',
	messagingSenderId: '483101382527',
	appId: '1:483101382527:web:019949dadbd919afefac4a',
	measurementId: 'G-QL9T44K6H8'
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};