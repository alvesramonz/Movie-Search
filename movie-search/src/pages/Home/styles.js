import styled from 'styled-components';

export const Container = styled.div``;

export const MovieList = styled.div`
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

export const SortMovies = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  margin-left: -1px;
  margin-top: 40px;
  margin-bottom: 40px;

  button {
    display: inline-block;
    font-size: 1rem;
    color: #dee2e6;
    text-align: center;
    vertical-align: middle;
    background: transparent;
    border-radius: 0.25rem;
    padding: 6px 12px;
    margin: 0 0 0 -1px;
    border: 1px solid #343a40;
    padding: 0.375rem 0.75rem;
  }
`;
