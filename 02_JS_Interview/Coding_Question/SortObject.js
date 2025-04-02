const array = [
    { name: "Abhi", type: "file" },
    { name: "Abhin", type: "folder" },
    { name: "Abhina", type: "folder" },
    { name: "Abhinav", type: "file" }
  ];
  
  function sortByType(arr) {
    return arr.sort((a, b) => {
      if (a.type == "folder" && b.type == "file") {
        return -1;  // Folder should come before file
      }
      if (a.type == "file" && b.type == "folder") {
        return 1;   // File should come after folder
      }
      return 0;     // No change if both are the same type (both folder or both file)
    });
  }
  
  console.log(sortByType(array));
  