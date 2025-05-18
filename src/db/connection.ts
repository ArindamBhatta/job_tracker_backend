const fs = require("firebase-admin"); //Imports the Firebase Admin SDK library
/* 
This library lets your backend (Node.js) securely connect to Firebase services like Firestore, Auth, Storage, etc., without client-side restrictions.

The Admin SDK gives full access because it's used in secure, server-side apps
*/
const serviceAccount = require("./firestore-config.json");

/* 
This JSON is how the Admin SDK authenticates your server as a trusted Firebase client.
*/

fs.initializeApp({
  credential: fs.credential.cert(serviceAccount),
});

/* 
Without this, your backend won’t know which Firebase project or credentials to use.
This step starts the connection to Firebase services, including Firestore.

steps
require("firebase-admin")	 -> Load the Firebase Admin SDK
require("./firestore-config.json") ->	Load your service account key
initializeApp(...)	-> Initialize Firebase with that key
fs.firestore()	-> Get access to the Firestore database
*/

export const database = fs.firestore();
