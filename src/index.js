// this is the fetch asking json to return content to the DOM from this local host
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/movies")

// this is json responding and promising to return data from the movies DB/ local host  
    .then(r => r.json())
      .then(data => {

// this is creating variable, targeting the movie list as to where to place my pic nav bar
    let movieListNav = document.querySelector("#movie-list");

// this creates the variable so when page loads all the details for F13 1 to show up on page by default  
    let firstJason = data[0]
        
// this is the iteration for each movie to request all images using variables, creating space for them, and indicating where the images are coming from   
data.forEach(movie => {
    let imageUrl = movie.image;
    let img = document.createElement("img");
        img.src = imageUrl;

// this appends aka adds it back into the nav bar once the image space and source are declared above   
movieListNav.appendChild(img);
        });
   
// this shows details of the first movie 
    let detailImage = document.querySelector("#detail-image")
    let title = document.querySelector("#title")
    let yearReleased = document.querySelector("#year-released")
    let description = document.querySelector("#description")

// this is updating the firstJason detail with the info of first Jason 
    detailImage.src = firstJason.image
    title.textContent = firstJason.title
    yearReleased.textContent = firstJason.year_released
    description.textContent = firstJason.description

      })
// this is so errors can be caught in the DOM console 
      .catch(error => {
        console.error("Error fetching movies:", error);
      });
  });