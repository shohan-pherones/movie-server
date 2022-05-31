const loadData = () => {
  fetch(
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=784c655f8d0129125733d8078cc0f98d"
  )
    .then((res) => res.json())
    .then((data) => displayField(data.results));
};

loadData();

const displayField = (movies) => {
  const movieContainer = document.getElementById("movie-container");
  for (const movie of movies) {
    console.log(movie);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card m-3">
        <img width="100px" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title fw-bold">${movie.title}</h5>
            <p class="card-text text-danger">${movie.release_date}</p>
        </div>
    </div>
    `;
    movieContainer.appendChild(div);
  }
};
