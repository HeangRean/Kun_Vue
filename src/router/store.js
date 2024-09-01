import { reactive, toRefs } from 'vue';

// Sample data structure from your JSON (db.json) file
export const state = reactive({
  meetings: [
    {
      id: 1,
      name: "Meeting Name 1",
      fileUrl: "path/to/document1.pdf",
      fileName: "document1.pdf",
    },
    {
      id: 2,
      name: "Meeting Name 2",
      fileUrl: "path/to/document2.pdf",
      fileName: "document2.pdf",
    },
  ],
});

// Function to handle the file download
export const downloadFile = (url, fileName) => {
  if (!url) {
    alert("File not found.");
    return;
  }

  // Create a link element
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;

  // Append the link to the body, trigger click and remove it
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Expose state and download function
export const { meetings } = toRefs(state);