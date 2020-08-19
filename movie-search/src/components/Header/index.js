import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Link to="/">
        <h1>MovieDB</h1>
      </Link>

      <input
        name="search"
        type="text"
        placeholder="Search by movie title"
      ></input>
    </Container>
  );
}

export default Header;
