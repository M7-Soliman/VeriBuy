const functions = require("firebase-functions");

const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore()

exports.newUser = functions.auth.user().onCreate((user) => {
    return db
        .collection("user")
        .doc(user.uid)
        .create(JSON.parse(JSON.stringify(user)))
})


// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
