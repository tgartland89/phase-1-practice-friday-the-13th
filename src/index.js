// this is the fetch asking json to return content to the DOM from this local host
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/movies")

// this is json responding and promising to return data from the movies DB/ local host  
    .then(r => r.json())
      .then(data => {


// this is creating variable, targeting the movie list as to where to place my pic nav bar
    let movieListNav = document.querySelector("#movie-list");

// moved up variables from when I wanted just first movie details:
// adding wached and blood variables 
    let detailImage = document.querySelector("#detail-image")
    let title = document.querySelector("#title")
    let yearReleased = document.querySelector("#year-released")
    let description = document.querySelector("#description")
    let watchedButton = document.querySelector("#watched")
    let bloodAmount = document.querySelector("#amount")

// this creates the variable so when page loads all the details for F13 1 to show up on page by default  
    let firstJason = data[0]
        
// this is the iteration for each movie to request all images using variables, creating space for them, and indicating where the images are coming from   
data.forEach(movie => {
    let imageUrl = movie.image;
    let img = document.createElement("img");
        img.src = imageUrl;

// creating click event
img.addEventListener("click" , () => {
    updateMovieDetails(movie)
}) 

// this appends aka adds it back into the nav bar once the image space and source are declared above   
movieListNav.appendChild(img);
        });
   

// this was where I first added details of the first movie 
// now it it's a function to update movie details 
function updateMovieDetails(movie) {
    detailImage.src = movie.image;
    title.textContent = movie.title;
    yearReleased.textContent = movie.year_released;
    description.textContent = movie.description;
    watchedButton.textContent = movie.watched ? "Watched" : "Unwatched";
    bloodAmount.textContent = movie.blood_amount;
}

// this adds friday 13th p1 as the default starting point 
updateMovieDetails(firstJason);
})

// this is so my consol DOM will catch any errors to check 
.catch(error => {
console.error("Error fetching movies:", error);
});
});