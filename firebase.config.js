// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAsVjvUhcaLJb79w2vzCy_SFwqX8G6uZN4',
	authDomain: 'kolmi-292615.firebaseapp.com',
	projectId: 'kolmi-292615',
	storageBucket: 'kolmi-292615.appspot.com',
	messagingSenderId: '169280554271',
	appId: '1:169280554271:web:ac496ebf48f18ccddddc2a',
	measurementId: 'G-P302MD2PN6'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
