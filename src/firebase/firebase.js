import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// // .once('value')
// // .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSanpshot) => {
// //         expenses.push({
// //             id: childSanpshot.key,
// //             ...childSanpshot.val()
// //         });
// //     });

// //     console.log(expenses);
// // });

// // database.ref('expenses')
// // .on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSanpshot) => {
// //         expenses.push({
// //             id: childSanpshot.key,
// //             ...childSanpshot.val()
// //         });
// //     });

// //     console.log(expenses);
// // });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 12500,
//     createdAt: 0
// });

// //database.ref('notes/-M6jYogDkQOsTzbJ6CSJ').remove();

// // database.ref('notes').push({
// //     title: 'Course Topics',
// //     body: 'React Native, Angular, Python'
// // });

// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// // });

// // database.ref('location/city')
// // .once('value')
// // .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// // })
// // .catch((e) => {
// //     console.log('Error fetching data', e);
// // });

// // database.ref().set({
// //     name: 'Milan Patel',
// //     age: 21,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Surat',
// //         country: 'India'
// //     }
// // }).then(() => {
// //     console.log('Data is saved!');
// // }).catch((e) => {
// //     console.log('This failed. ', e);
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // });

// // database.ref()
// // .remove().then(() => {
// //     console.log('Data was removed.');
// // }).catch((e) => {
// //     console.log('Did not remove data', e);
// // });