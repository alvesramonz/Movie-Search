import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, SearchBox } from './styles';

import { AiOutlineSearch } from 'react-icons/ai';

function Header() {
  const [query, setQuery] = useState('');

  function handleChange(event) {
    setQuery(event.target.value);
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  return (
    <Container>
      <Link to="/">
        <h1>Movie Search</h1>
      </Link>

      <SearchBox>
        <form /*onSubmit={() => handleSubmit()}*/>
          <input
            id="movie-search"
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search by movie title"
          />
          <Link to={`/search/movie/${query}`}>
            <button id="submit-btn" type="submit">
              <AiOutlineSearch color={'#000'} />
            </button>
          </Link>
        </form>
      </SearchBox>
    </Container>
  );
}

export default Header;
