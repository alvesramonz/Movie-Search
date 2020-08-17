import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Link to="/">
        <h1>MovieDB</h1>
      </Link>
    </Container>
  );
}

export default Header;
