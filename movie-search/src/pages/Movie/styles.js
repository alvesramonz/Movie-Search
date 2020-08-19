import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
  box-sizing: border-box; /* Questionavel */

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

export const MovieDetail = styled.div`
  margin-top: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #dee2e6;
  position: relative;
  display: grid;
  grid-template:
    'image info'
    'image stat';
  justify-content: start;
  grid-template-columns: 300px 1fr;

  .movie-img {
    width: 300px;
    grid-area: image;
    vertical-align: middle;
    border-style: none;
  }

  .movie-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    align-items: flex-start;
    box-sizing: border-box;
  }

  .movie-stats {
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    padding: 15px;
    font-size: 1em;
    color: #adb5bd;
    grid-area: stat;
    align-self: end;
    align-items: center;
    justify-content: space-between;
    display: flex;
  }
`;

export const Recommendations = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;

  a {
    &:hover {
      opacity: 0.7;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    background: #711324;
    border-radius: 4px;
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
