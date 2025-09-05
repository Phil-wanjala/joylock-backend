import * as admin from 'firebase-admin';
import * as path from 'path';

// Path to your service account key (should be outside version control)
const serviceAccount = require(path.join(__dirname, '../config/joylock-8fd8d-firebase-adminsdk-fbsvc-8e7f536ad9.json'));

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${serviceAccount.project_id}.firebaseio.com` // Optional but recommended
});

export default admin;