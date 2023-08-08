// scripts/script.js
import { movies } from "./movie.js";

// Function to filter and display movie cards
function displayMovies() {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();
  const genreFilter = document.getElementById("genre-filter").value;
  const countryFilter = document.getElementById("country-filter").value;
  const yearFilter = document.getElementById("year-filter").value;

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(searchInput);
    const genreMatch =
      genreFilter === "all" || movie.genre.toLowerCase().includes(genreFilter);
    const countryMatch =
      countryFilter === "all" || movie.country.toLowerCase() === countryFilter;
    const yearMatch =
      yearFilter === "all" || movie.year.toString() === yearFilter;
    return titleMatch && genreMatch && countryMatch && yearMatch;
  });

  const movieContainer = document.getElementById("movie-container");
  movieContainer.innerHTML = "";

  filteredMovies.forEach((movie) => {
    const card = createMovieCard(movie);
    movieContainer.appendChild(card);
  });
}

// Function to create a movie card
function createMovieCard(movie) {
  const card = document.createElement("div");
  card.classList.add("movie-card");

  // Create the poster image
  const poster = document.createElement("img");
  poster.classList.add("poster");
  poster.src = movie.poster;
  card.appendChild(poster);

  // Create the movie title
  const title = document.createElement("h3");
  title.textContent = movie.title;
  card.appendChild(title);

  // Create the movie details
  const details = document.createElement("div");
  details.classList.add("movie-details");
  details.innerHTML = `
    <p>Year: ${movie.year}</p>
    <p>Genre: ${movie.genre}</p>
    <p>Rating: ${movie.rating}</p>
    <p>Duration: ${movie.duration}</p>
  `;
  card.appendChild(details);

  // Create the detail button
  const detailButton = document.createElement("a");
  detailButton.href = movie.href;
  detailButton.textContent = "Details";
  detailButton.classList.add("btn-detail");
  card.appendChild(detailButton);

  return card;
}

// Event listener for search button
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", displayMovies);

// Event listeners for filter dropdowns
const genreFilter = document.getElementById("genre-filter");
const countryFilter = document.getElementById("country-filter");
const yearFilter = document.getElementById("year-filter");
genreFilter.addEventListener("change", displayMovies);
countryFilter.addEventListener("change", displayMovies);
yearFilter.addEventListener("change", displayMovies);

// Display all movies on page load
displayMovies();

/* export function showMovieDetailByTitle(title) {
  const movie = movies.find((movie) => movie.title === title);
  if (movie) {
    const movieDetails = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${movie.title}</title>
    
      </head>
    
      <body id="#top">
    
        <header class="header" data-header>
          <div class="container">
            <div class="overlay" data-overlay></div>
    
            <a href="../index.html" class="logo">
              <img src="../assets/images/logo.webp" alt="logo" />
            </a>
    
            <button class="menu-open-btn" data-menu-open-btn>
              <ion-icon name="reorder-two"></ion-icon>
            </button>
    
            <nav class="navbar" data-navbar>
              <div class="navbar-top">
                <a href="../index.html" class="logo">
                  <img src="../assets/images/logo.webp" alt="logo" />
                </a>
    
                <button class="menu-close-btn" data-menu-close-btn>
                  <ion-icon name="close-outline"></ion-icon>
                </button>
              </div>
    
              <ul class="navbar-list">
                <li>
                  <a href="../index.html" class="navbar-link">Home</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
    
        <main>
          <article>
          <section class="movie-detail">
        <div class="container">
          <figure class="movie-detail-banner">
            <img src="${movie.poster}" alt="${movie.title}" />
          </figure>
    
          <div class="movie-detail-content">
            <!-- <p class="detail-subtitle">New Episodes</p> -->
    
            <h1 class="h1 detail-title"><strong>${movie.title}</strong></h1>
    
            <div class="meta-wrapper">
              <div class="ganre-wrapper">
                <a href="#">${movie.genre}</a>
              </div>
    
              <div class="date-time">
                <div>
                  <ion-icon name="calendar-outline"></ion-icon>
    
                  <time datetime="2023">${movie.year}</time>
                </div>
    
                <div>
                  <ion-icon name="time-outline"></ion-icon>
    
                  <time datetime="">${movie.duration}</time>
                </div>
                <div>
                  <ion-icon name="star-outline"></ion-icon>
                  <span>${movie.rating}</span>
                </div>
              </div>
            </div>
    
            <p class="storyline">
              ${movie.synopsis}
            </p>
    
            <div class="details-actions">
              <iframe
                width="515"
                height="290"
                src="${movie.embed}"
                title="Bstation video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style="border-radius: 0.75rem"
              ></iframe>
            </div>
    
            <!-- <a href="https://bili.im/rwi8o6K" class="download-btn">
              <span>Streaming</span>
    
              <ion-icon name="play-outline"></ion-icon>
            </a> -->
          </div>
        </div>
      </section> 
            </article>
        </main>
    
        
      </body>
    </html>
    `;
    document.getElementById("movie-details").innerHTML = movieDetails;
  } else {
    document.getElementById("movie-details").innerHTML =
      "<p>Movie not found.</p>";
  }
} */
