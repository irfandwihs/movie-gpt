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
