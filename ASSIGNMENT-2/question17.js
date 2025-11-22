function downloadFile(filename, callback) {
  setTimeout(() => {
    console.log(`Downloading ${filename}...`);
    if (typeof callback === "function") callback();
  }, 1500); 
}
downloadFile("report.pdf", () => {
  console.log("Download complete!");
});

