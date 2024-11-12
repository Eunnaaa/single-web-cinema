import React from "react";
import styled from "styled-components";

const MovieSearchInput = styled.input`
  width: 60%;
  padding: 10px;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: #444;
  color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
    background-color: #555;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const SearchBar = ({ onSearch }) => {
  return (
    <MovieSearchInput
      placeholder="Cari Film Hari Ini..."
      onChange={({ target }) => onSearch(target.value)}
    />
  );
};

export default SearchBar;
