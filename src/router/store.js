export default {
  data() {
    return {
      items: [] // Assuming this will be populated with your JSON data
    };
  },
  methods: {
    async downloadFile() {
      try {
        // Fetch the JSON data
        const response = await axios.get('db.json');
        const files = response.data.files;
        
        if (files && files.length > 0) {
          // Assuming you want to download the first file in the array
          this.fileData = files[0];

          // Create a link to trigger the download
          const link = document.createElement('a'); 
          link.href = this.fileData.related_document;
          link.download = this.fileData.filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          console.error('No files found in JSON');
        }
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    }
  }

  
};
