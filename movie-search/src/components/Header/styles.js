import styled from 'styled-components';

export const Container = styled.header`
  text-align: center;
  display: flex;
  background: transparent !important;
  padding-top: 15px;
  align-items: center;
  justify-content: space-between;

  a {
    color: #ffc107;
    font-family: 'Lobster', cursive;
  }
`;

export const SearchBox = styled.div`
  form {
    display: flex;
  }

  input {
    display: block;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background: #fff;
    background-clip: padding-box;
    border: none;
    border-right: none;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;

    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  button {
    float: left;
    width: 100%;
    height: calc(1.5em + 0.75rem + 0.5px);
    padding: 10px;
    background: #ffc107;
    color: white;
    font-size: 17px;
    border: none;
    border-left: none;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;

    &:hover {
      opacity: 0.9;
    }
  }
`;
