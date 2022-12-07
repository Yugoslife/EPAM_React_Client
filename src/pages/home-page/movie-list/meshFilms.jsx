import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function MeshFilms() {
  return (
    <ImageList
      sx={{ width: "100%", height: 464 }}
      cols={3}
      variant="quilted"
      gap={60}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>{item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://assets.cdn.moviepilot.de/files/07a61f8455bcdfa81b565fbae400e37f0ac2408717c5887cd63bba28fe8e/limit/160/2000/pulp-fiction-cover.jpg",
    title: "Pulp fiction",
    author: "Action & Adventure",
  },
  {
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/a8132729-68c2-4f03-9795-0d886db8ae38/600x900",
    title: "Bohemian Rhapsody",
    author: "Drama, Biography, Music",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWU_oE5hRqmbseBhWjrsSUnyw-bgtkaa20g&usqp=CAU",
    title: "Kill Bill",
    author: "Oscar winning Movie",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHaLHYqOtoCfZ_3l4zQAwwNaWPSdq0qiwL46Ai_0eBA19tUpagg_ffpz5AbJ4YcdpX_DY&usqp=CAU",
    title: "Avengers: War of Infinity",
    author: "Action & Adventure",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGo3m0SolgMe6Q2JjvH4BwD2BccjVAdxy9Mw&usqp=CAU",
    title: "Inception",
    author: "Action & Adventure",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjqLGV58j2aAhKdK3JJw2E6ut6Jmtf0-GsA&usqp=CAU",
    title: "Reservoir dogs",
    author: "Oscar winning Movie",
  },
];
