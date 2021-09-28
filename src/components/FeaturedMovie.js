import React from 'react';
import './FeaturedMovie.css';

export default ({item}) => {

  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for(let i in item.genres) {
    genres.push( item.genres[i].name );
  }  

  return(
    <section className="Trending" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(http://image.tmdb.org./t/p/original${item.backdrop_path})`
    }}>
        <div className="featured--vertical">
            <div className="featured--horizontal">
                <div className="featured--name">{item.name}</div>
                <div className="featured--info">
                    <div className="featured--points">{item.vote_average} Pontos</div>
                    <div className="featured--year">{firstDate.getFullYear}</div>
                    <div className="seasons">{item.number_of_seasons} season{item.number_of_seasons !== 1 ? 's' : ''}</div>
                </div>
                <div className="overview">{overview}</div>
                <div className="buttom">
                    <a href={`/watch/${item.id}`} className="playBtn">► Assistir</a>
                    <a href={`/list/add/${item.id}`} className="addBtn">+ Minha lista</a>
                </div>
                <div className="genres"><strong>Generos:</strong> {genres.join(', ')}</div>
            </div>
        </div>
    </section>   
);  
}