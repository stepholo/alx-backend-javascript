import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  // Use Promise.all to collectively resolve all promises
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      // Log the necessary information to the console
      console.log(`Body: ${photoResponse.body}`);
      console.log(`First Name: ${userResponse.firstName}`);
      console.log(`Last Name: ${userResponse.lastName}`);
    })
    .catch((error) = {
      // Log an error message in case of an error
      console.error('Signup system offline');
    });
}

module.export = handleProfileSignup;
