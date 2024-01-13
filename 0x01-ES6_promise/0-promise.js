export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call using setTimeout
    setTimeout(() => {
      const success = Math.random() > 0.5; // Simulating success or failure

      if (success) {
        resolve({ data: 'API response data' });
      } else {
        reject(new Error('Failed to fetch data from the API'));
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
}

module.export = getResponseFromAPI;
