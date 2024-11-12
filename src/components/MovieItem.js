import React from "react";
import styled from "styled-components";

const MovieItemWrapper = styled.div`
  background-color: #333;
  color: white;
  border-radius: 10px;
  padding: 15px;
  margin: 15px;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.05);
  }
`;

const MovieTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MovieImage = styled.img`
  width: 100%;
  max-width: 200px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const MovieDate = styled.div`
  font-size: 0.9rem;
  margin-top: 5px;
  color: #ccc;
`;

const MovieRate = styled.div`
  font-size: 0.9rem;
  margin-top: 5px;
  color: #ccc;
`;

const MovieItem = ({ movie }) => {
  return (
    <MovieItemWrapper>
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieImage
        src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
        alt={movie.title}
      />
      <MovieDate>Release: {movie.release_date}</MovieDate>
      <MovieRate>{movie.vote_average}</MovieRate>
    </MovieItemWrapper>
  );
};

export default MovieItem;
