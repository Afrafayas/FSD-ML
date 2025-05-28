const apiKey = 'b178f282'; 
async function searchMovie() {
  const movieInput = document.getElementById('movieInput').value.trim();
  const movieDetails = document.getElementById('movieDetails');
  const errorMessage = document.getElementById('errorMessage');
  
  if (movieInput === '') {
    showError("Please enter a movie title.");
    return;
  }

  try {
    const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(movieInput)}&apikey=${apiKey}`);
    const data = await response.json();

    if (data.Response === "True") {
      document.getElementById('movieTitle').innerText = data.Title;
      document.getElementById('movieYear').innerText = `Year: ${data.Year}`;
      document.getElementById('moviePlot').innerText = data.Plot;
      document.getElementById('moviePoster').src = data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/300x450?text=No+Image";
      
      movieDetails.classList.remove('d-none');
      errorMessage.classList.add('d-none');
    } else {
      showError("Movie not found. Please try another title.");
    }
  } catch (error) {
    showError("An error occurred while fetching movie data.");
  }
}

function showError(message) {
  const movieDetails = document.getElementById('movieDetails');
  const errorMessage = document.getElementById('errorMessage');

  movieDetails.classList.add('d-none');
  errorMessage.innerText = message;
  errorMessage.classList.remove('d-none');
}
