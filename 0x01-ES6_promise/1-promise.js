export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call using setTimeout
    setTimeout(() => {
      if (success) {
        resolve({ status: 200, body: 'Success' });
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
}
