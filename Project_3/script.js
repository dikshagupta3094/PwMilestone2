const searchBox = document.getElementById('inputSearch')
const CardWrapper = document.querySelector('.card_wrapper')
console.log('CardWrappr',CardWrapper);
const APIKEY = "b465cfa0"
const URL = `http://www.omdbapi.com/?apikey=${APIKEY}`
searchBox.addEventListener('input',async()=>{
    const MovieName = searchBox.value
   let response = await fetch(`${URL}&s=${MovieName}`)
   response = await response.json()
   console.log(response);
   
   if(response.Response === 'True'){
    CardWrapper.innerHTML = ''
    response.Search.forEach(movie => {
        const poster = movie.Poster === 'N/A' ?'https://www.prokerala.com/movies/assets/img/no-poster-available.jpg' :movie.Poster
        CardWrapper.innerHTML+= `<div class="movie_card">
        <img src= ${poster} alt="Movie Poster">
        <h3>${movie.Title}</h3>
        <button >Watch Now</button>
        </div>`
    });
   }
   else{
    CardWrapper.innerHTML = 'Movie Not found'
   }

})

