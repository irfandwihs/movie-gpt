// movie-details.js
import { movies } from "./movie.js"; // Import the movies array

function showMovieDetailByTitle(title) {
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
      <body>
        <header>
          <div class="logo">Detail Page</div>
          <a href="../index.html" class="logo-link">Home</a>
        </header>
    
        <main class="main">
          <section class="movie-detail">
            <div class="container">
              <h2 class="movie-title">${movie.title}</h2>
              <div class="movie-info">
                <img
                  class="poster-detail"
                  src="${movie.poster}" alt="${movie.title}"
                />
    
                <div class="trailer">
                  <iframe
                    width="740"
                    height="416"
                    src="${movie.embed}"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div class="info">
              <p class="genre-year">
              <ion-icon name="pricetag-outline"></ion-icon>
              ${movie.genre} |
              <ion-icon name="calendar-outline"></ion-icon>
              ${movie.year} |
              <ion-icon name="star-outline"></ion-icon>
              ${movie.rating} |
              <ion-icon name="time-outline"></ion-icon>
              ${movie.duration}
            </p>
                <p class="country">Country: ${movie.country}</p>
                <p class="synopsis">
                ${movie.synopsis}
                </p>
              </div>
            </div>
          </section>
        </main>
      </body>
    </html>
    `;

    // Display the dynamic HTML in the specified div
    document.getElementById("movie-details").innerHTML = movieDetails;
  } else {
    document.getElementById("movie-details").innerHTML =
      "<p>Movie not found.</p>";
  }
}

// Export the function for use in other files
export { showMovieDetailByTitle };
