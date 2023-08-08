// Function to display movie details
/* function displayMovieDetail(movie) {
  // Implement the code to display movie details on the page
  // (The implementation can be the same as the previous code)
} */

import { movies } from "../movie.js";
// Function to find and display movie detail based on movie title
/* function showMovieDetailByTitle(title) {
  const movie = movies.find((movie) => movie.title === title);
  if (movie) {
    // Implement the code to display the movie details
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

/* function showMovieDetailByTitle(title) {
  const movie = movies.find((movie) => movie.title === title);
  if (movie) {
    const movieDetails = `
  <h1>${movie.title}</h1>
  <p>Genre: ${movie.genre}</p>
  <p>Year: ${movie.year}</p>
  <p>Duration: ${movie.duration}</p>
  <p>Rating: ${movie.rating}</p>
  <p>Synopsis: ${movie.synopsis}</p>
  <iframe width="515" height="290" src="${movie.embed}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `;
    document.getElementById("movie-details").innerHTML = movieDetails;
  } else {
    document.getElementById("movie-details").innerHTML =
      "<p>Movie not found.</p>";
  }
} */

// dtl.js
// ...

function showMovieDetailByTitle(title) {
  const movie = movies.find((movie) => movie.title === title);
  if (movie) {
    // Create the movieDetails element
    const movieDetails = document.createElement("div");

    // Add the movie details HTML to the movieDetails element
    movieDetails.innerHTML = `
      <!-- Your movie details HTML goes here -->
    `;

    // Get the movie-details container from the HTML and clear its content
    const movieDetailsContainer = document.getElementById("movie-details");
    movieDetailsContainer.innerHTML = "";

    // Append the movieDetails element to the movie-details container
    movieDetailsContainer.appendChild(movieDetails);
  } else {
    console.log("Movie not found.");
  }
}
