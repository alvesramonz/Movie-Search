import React from 'react';

import { Container } from './styles';
import {getPopular} from '../../services/movieApi';

function Home() {
return (
  <Container>
    {getPopular}
  </Container>
);
}

export default Home;
