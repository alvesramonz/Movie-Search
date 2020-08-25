import styled from 'styled-components';

export const Container = styled.div`
  h3 {
    padding-top: 40px;
    color: #adb5bd;
    font-size: 2em;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    margin-top: 0;
    box-sizing: border-box;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    display: block;
  }
`;

export const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 30px;

  a {
    background: #711324;
    border-radius: 4px;

    &:hover {
      opacity: 0.7;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;

    img {
      align-self: center;
      max-width: 250px;
      border-radius: 3px;
    }

    .card-body {
      > strong {
        font-size: 14px;
        line-height: 20px;
        color: #fff;
        margin-top: 5px;
      }
    }

    .card-rating {
      right: 7px;
      top: 7px;
      background-color: #212529;
      padding: 5px;
      color: #ffc107;
      text-align: center;
      display: block;
      z-index: 100;
      min-width: 35px;
      font-size: 0.8em;
      border-radius: 50%;
      border: 2px solid #343a40;
    }
  }
`;
