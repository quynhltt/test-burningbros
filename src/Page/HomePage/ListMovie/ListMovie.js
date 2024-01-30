import React, { useEffect, useState } from 'react'
import { movieServ } from '../../../service/movieService'
import ItemMovie from './ItemMovie';

export default function ListMovie() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    movieServ.getMovieList()
             .then((res) => {
                // console.log(res.data.content);
                setMovieList(res.data.content);
             })
             .catch((err) => {
                console.log(err);
             })
  }, []);
  return (
    <div className='grid grid-cols-4 gap-10 container'>
      {movieList.slice(0, 8).map((item) => {
        return <ItemMovie data={item} key={item.maPhim}/>
      })}
    </div>
  )
}
