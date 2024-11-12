import React from "react";
import MovieItem from "./MovieItem";
import styled from "styled-components";

const MovieListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
`;

const MovieList = ({ movies }) => {
  return (
    <MovieListWrapper>
      {movies.map((movie, i) => (
        <MovieItem key={i} movie={movie} />
      ))}
    </MovieListWrapper>
  );
};

export default MovieList;
