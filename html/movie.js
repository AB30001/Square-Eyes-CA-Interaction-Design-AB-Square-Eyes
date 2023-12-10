
import { getMovie } from "./posts.js";




export async function moviePage() {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
  
    const movie = await getMovie(id);
    renderMovie(movie);
}

function renderMovie(movieData) {
    const movieDetailsContainer = document.querySelector('.movie-details');
    if (!movieDetailsContainer) {
        console.error('Movie details container not found');
        return;
    }

    movieDetailsContainer.innerHTML = '';


    const title = document.createElement('h2');
    title.textContent = movieData.title;

    const image = document.createElement('img');
    image.src = movieData.image;
    image.alt = movieData.title;

   // Watch Trailer button
   const watchTrailerButton = document.createElement('button');
   watchTrailerButton.textContent = 'Watch Trailer';
   watchTrailerButton.className = 'watch-trailer-button';
   // Add event listener for watch trailer button
   watchTrailerButton.addEventListener('click', () => {
       console.log('Watch Trailer button clicked for', movieData.title);
       // Implement the action for this button, like opening a trailer video.
   });


    

    // Icons container
    const iconsContainer = document.createElement('div');
    iconsContainer.className = 'icons-container';

    // Favorite icon with text
const favoriteIcon = document.createElement('span');
favoriteIcon.textContent = '❤ Favorite';
favoriteIcon.className = 'icon-favorite';
favoriteIcon.addEventListener('click', () => {
    favoriteIcon.classList.toggle('red-color');
});

// Watch later icon with text
const watchLaterIcon = document.createElement('span');
watchLaterIcon.textContent = '🕒 Watch Later';
watchLaterIcon.className = 'icon-watch-later';
watchLaterIcon.addEventListener('click', () => {
    watchLaterIcon.classList.toggle('red-color');
});

// Watched icon with text
const watchedIcon = document.createElement('span');
watchedIcon.textContent = '✔ Watched';
watchedIcon.className = 'icon-watched';
watchedIcon.addEventListener('click', () => {
    watchedIcon.classList.toggle('red-color');
});


iconsContainer.append(favoriteIcon, watchLaterIcon, watchedIcon);






    const storylineHeader = document.createElement('h3');
    storylineHeader.textContent = 'Storyline';

    const description = document.createElement('p');
    description.textContent = movieData.description;

    const genre = document.createElement('p');
    genre.textContent = `Genre: ${movieData.genre}`;

    const rating = document.createElement('p');
    rating.textContent = `Rating: ${movieData.rating}`;

    const released = document.createElement('p');
    released.textContent = `Released: ${movieData.released}`;

    const price = document.createElement('p');
    price.textContent = `Price: $${movieData.price.toFixed(2)}`;

    const discountedPrice = document.createElement('p');
    if (movieData.onSale) {
        discountedPrice.textContent = `Discounted Price: $${movieData.discountedPrice.toFixed(2)}`;
    }

    const tags = document.createElement('p');
    tags.textContent = `Tags: ${movieData.tags.join(', ')}`;

    const favorite = document.createElement('p');
    favorite.textContent = movieData.favorite ? 'This is one of your favorite movies!' : 'Not marked as favorite';

    const watchButton = document.createElement('button');
    watchButton.textContent = 'Watch';
    watchButton.className = 'watch-button';
    // Add event listener for watch button
    watchButton.addEventListener('click', () => {
        console.log('Watch button clicked for', movieData.title);
    });

    const downloadButton = document.createElement('button');
    downloadButton.textContent = 'Download';
    downloadButton.className = 'download-button';
    // Add event listener for download button
    downloadButton.addEventListener('click', () => {
        console.log('Download button clicked for', movieData.title);
    });

    movieDetailsContainer.append(title, image, watchTrailerButton, iconsContainer, storylineHeader, description, genre, rating, released, price, discountedPrice, tags, favorite, watchButton, downloadButton);
}






















