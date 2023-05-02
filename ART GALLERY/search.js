const search = document.querySelector(".search-box input");
const images = document.querySelectorAll(".image-box");

search.addEventListener("keyup", e => {
  if (e.key === "Enter") {
    const searchTerm = search.value.trim().toLowerCase();
    
    images.forEach(image => {
      const artistName = image.dataset.name.toLowerCase();
      
      if (artistName.includes(searchTerm)) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  }
});

search.addEventListener("input", () => {
  const searchTerm = search.value.trim().toLowerCase();
  
  if (searchTerm === "") {
    images.forEach(image => {
      image.style.display = "block";
    });
  } else {
    images.forEach(image => {
      const artistName = image.dataset.name.toLowerCase();
      
      if (artistName.includes(searchTerm)) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  }
});
