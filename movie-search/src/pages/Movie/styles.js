import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
  box-sizing: border-box; /* Questionavel */
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

export const MovieCast = styled.div`
  background-color: #fff;
  padding: 30px 0 0 30px;
  box-sizing: border-box;

  .thread-actors {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;

    h3 {
      color: #343a40;
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
  }

  .movie-actors {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;
  }
`;

export const Recommendations = styled.div``;
