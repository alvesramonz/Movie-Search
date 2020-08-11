import React from 'react';

import { Container } from './styles';

function Footer() {
  return (
    <Container>
      &copy; {new Date().getFullYear()}, made with{' React '}
      by <a href="http://github.com/alvesramonz">Ramon Alves</a>
    </Container>
  );
}

export default Footer;

// className="footer text-center w-100 mt-4 mb-4"
