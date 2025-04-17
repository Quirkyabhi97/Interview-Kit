function pageLimit(pageNumber, limit) {
    // Calculate the starting page number
    const start = (pageNumber - 1) * limit + 1;
  
    // Calculate the ending page number
    const end = pageNumber * limit;
  
    // Return the range as a string
    return `${start} - ${end}`;
  }
  
  // Example usage
  console.log(pageLimit(1, 20)); // "1 - 20"
  console.log(pageLimit(2, 20)); // "21 - 40"
  console.log(pageLimit(3, 10)); // "21 - 30"
  