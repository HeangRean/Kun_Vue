// export default {
//   data() {
//     return {
//       items: [], // This can hold other data if needed
//       fileData: null // Will be used to store the first file data from JSON
//     };
//   },
//   methods: {
//     async downloadFile() {
//       try {
//         // Fetch the JSON data from the server or public directory
//         const response = await axios.get('/db.json');
//         const files = response.data.files;

//         if (files && files.length > 0) {
//           // Assuming you want to download the first file in the array
//           this.fileData = files[0];

//           // Create a link to trigger the download
//           const link = document.createElement;
//           link.href = this.fileData.related_document;

//           // Append the .pdf extension if it's not already included
//           const fileNameWithExtension = this.fileData.filename.endsWith('.pdf')
//             ? this.fileData.filename
//             : this.fileData.filename + '.pdf';

//           link.download = fileNameWithExtension; // Set the filename with extension
//           document.body.appendChild(link);
//           link.click();
//           document.body.removeChild(link);
//         } else {
//           console.error('No files found in JSON');
//         }
//       } catch (error) {
//         console.error('Error fetching JSON data:', error);
//       }
//     }
//   }
// };
