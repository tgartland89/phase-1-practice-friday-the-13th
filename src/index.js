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

        let detailImage = document.querySelector("#detail-image");
        let title = document.querySelector("#title");
        let yearReleased = document.querySelector("#year-released");
        let description = document.querySelector("#description");
        let watchedButton = document.querySelector("#watched");
        let bloodAmount = document.querySelector("#amount");
  
// this creates the variable so when page loads all the details for F13 1 to show up on page by default
// I also created a current movie for first movie/ jason so it will still default as frist one shown when page loads 
        let firstJason = data[0];
        let currentMovie = firstJason;
    
// this is the iteration for each movie to request all images using variables, creating space for them, and indicating where the images are coming from

        data.forEach(movie => {
          let imageUrl = movie.image;
          let img = document.createElement("img");
          img.src = imageUrl;

// creating click event for the movies in my NavBar 

          img.addEventListener("click", () => {
            updateMovieDetails(movie);
          });

// this appends aka adds it back into the nav bar once the image space and source are declared above          
          movieListNav.appendChild(img);
        });
  
// this was where I first added details of the first movie- i moved them up to the- those details were movied above under the fetch 
// now it it's a function to update movie details 

        function updateMovieDetails(movie) {
          detailImage.src = movie.image;
          title.textContent = movie.title;
          yearReleased.textContent = movie.year_released;
          description.textContent = movie.description;
          watchedButton.textContent = movie.watched ? "Watched" : "Unwatched";
          bloodAmount.textContent = movie.blood_amount;
          currentMovie = movie;
        }

// this adds friday 13th p1 as the default starting point using my variable set above        
        updateMovieDetails(firstJason);
  
// created another click event for the watch and unwatch button to swap back abd forth using negation 
        watchedButton.addEventListener("click", () => {
          currentMovie.watched = !currentMovie.watched;
          watchedButton.textContent = currentMovie.watched ? "Watched" : "Unwatched";
        });

// setting up variables for blood form and querying where the info will go in to the HTML 
        let bloodForm = document.querySelector("#blood-form");
        let bloodInput = document.querySelector("#blood-amount");
  
// created another event for submitting blood rating and to continue adding
// it prevents the default form submission behavior and retrieves the value entered in the input field. 
// If the value is a valid number, it adds it to the blood_amount property of the currentMovie and 
// updates the bloodAmount text content accordingly.
        bloodForm.addEventListener("submit", event => {
          event.preventDefault();
          let bloodToAdd = parseInt(bloodInput.value);
          if (!isNaN(bloodToAdd)) {
            currentMovie.blood_amount += bloodToAdd;
            bloodAmount.textContent = currentMovie.blood_amount;
          }
// this will reset the blood value to an empty string 
          bloodInput.value = "";
        });
      })
// catch here so my console logs errors in the DOM 
      .catch(error => {
        console.error("Error fetching movies:", error);
      });
  });
  