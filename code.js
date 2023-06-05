// Your Code Here!

// Step One - Combining the two data sets together
const combinedMovies = movies.map(movie => {
    const movieDetail = movieDetails.find(detail => detail.title === movie.title);
    return { ...movie, ...movieDetail };
  }).filter(movie => movie !== undefined);
  
  // Step Two - Rendering the movies to the page
  function renderMovies(movies) {
    const movieContainer = document.getElementById("movieContainer");
    movieContainer.innerHTML = "";
  
    movies.forEach(movie => {
      const { title, imageUrl, cast, year } = movie;
  
      const movieImage = document.createElement("div");
      movieImage.classList.add("movie-image");
  
      const image = document.createElement("img");
      image.src = imageUrl;
      image.alt = title;
      movieImage.appendChild(image);
  
      const movieTitle = document.createElement("h2");
      movieTitle.textContent = title;
      movieImage.appendChild(movieTitle);
  
      const castElement = document.createElement("p");
      castElement.textContent = `Cast: ${cast.join(", ")}`;
      movieImage.appendChild(castElement);
  
      const movieYear = document.createElement("p");
      movieYear.textContent = `Year: ${year}`;
      movieImage.appendChild(movieYear);
  
      movieContainer.appendChild(movieImage);
    });
  }
  
  // Step Three - Searching through movies using movie title and Actors/Acress OR both 
  function searchMovies(event) {
    event.preventDefault();
  
    const titleInput = document.getElementById("titleInput");
    const actorInput = document.getElementById("actorInput");
  
    const searchTitle = titleInput.value.toLowerCase();
    const searchActor = actorInput.value.toLowerCase();
  
    const filteredMovies = combinedMovies.filter(movie => {
      const { title, cast } = movie;
  
      const titleMatch = title.toLowerCase().includes(searchTitle);
      const actorMatch = cast.some(actor => actor.toLowerCase().includes(searchActor));
  
      return titleMatch && actorMatch;
    });
  
    renderMovies(filteredMovies);
  }
  
  // Initializing the application
  function startApp() {
    renderMovies(combinedMovies);
  
    const searchForm = document.getElementById("searchForm");
    searchForm.addEventListener("submit", searchMovies);
  }
  
  startApp();
  
console.log("Movies:", movies);
console.log("MovieDetails:", movieDetails);