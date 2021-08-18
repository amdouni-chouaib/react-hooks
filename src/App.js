import { useState } from "react";

import Nav from "./components/Nav";
import MovieContainer from "./components/MovieContainer";
import AddMovie from "./components/AddMovie";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      id: "2525252",
      img: "data:image/jpeg;base64,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",
      name: "Jhon Wick",
      rating: 4,
    },
    {
      id: "85",
      img: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg",
      name: "Avatar",
      rating: 2,
    },
    {
      id: "63",
      img: "https://i.pinimg.com/236x/cd/63/5a/cd635a4ec02a4eda8dd1e94f8da5df9b.jpg",
      name: "Guardian of the galaxy",
      rating: 5,
    },
    {
      id: "41",
      img: "https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg",
      name: "Batman",
      rating: 5,
    },
    {
      id: "55",
      img: "https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg",
      name: "Deadpool 2",
      rating: 4,
    },
    {
      id: "9693",
      img: "https://a.ltrbxd.com/resized/sm/upload/1i/ou/un/hh/three%20robots-0-230-0-345-crop.jpg?k=e6e58dd1e3",
      name: "Love Death & Robots",
      rating: 3,
    },
    {
      id: "456",
      img: "https://starzplay-img-prod-ssl.akamaized.net/474w/MGM/VIKINGSY2013S06E001/VIKINGSY2013S06E001-474x677-PST.jpg",
      name: "Vikings",
      rating: 1,
    },
  ]);

  const [input, setInput] = useState("");

  const [rating, setRating] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const [newMovie, setNewMovie] = useState({
    id: Math.random(),
    img: "",
    name: "",
    rating: 1,
  });

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleNewMovie = (e) => {
    if (e.target.name === "rating") {
      setNewMovie({ ...newMovie, [e.target.name]: +e.target.value });
    } else {
      setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    }
  };

  const handleAddMovie = () => {
    if (newMovie.rating >= 1 && newMovie.rating <= 5) {
      setMovies([...movies, newMovie]);
      handleIsOpen();
    } else {
      alert("Movie rating should be between 1 and 5.");
    }
  };

  console.log(movies);

  return (
    <div className="App">
      <Nav
        rating={rating}
        handleRating={handleRating}
        input={input}
        handleInput={handleInput}
        handleIsOpen={handleIsOpen}
      />
      <br />
      <br />
      <AddMovie
        isOpen={isOpen}
        handleIsOpen={handleIsOpen}
        newMovie={newMovie}
        handleNewMovie={handleNewMovie}
        handleAddMovie={handleAddMovie}
      />
      <MovieContainer movies={movies} rating={rating} input={input} />
    </div>
  );
}

export default App;
