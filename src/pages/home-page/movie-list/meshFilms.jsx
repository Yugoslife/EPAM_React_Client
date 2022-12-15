import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function MeshFilms() {
  const [data, setData] = useState([]);
  console.log('data', data)
  useEffect(() => {
    axios.get('http://localhost:4000/movies')
    .then(res => {
      const movies = res.data.data;
      setData(movies);
    })
  }, []);

  return (
    <ImageList
      sx={{ width: "100%", height: 464 }}
      cols={3}
      variant="quilted"
      gap={60}
    >
      {data && data.map((item) => (
        <ImageListItem key={item.id}>
          <img
          src={item.poster_path}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>{item.genres[0]}, {item.genres[1]}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
