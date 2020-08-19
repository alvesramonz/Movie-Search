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
    border: 1px solid #ced4da;
    border-radius: 0.25rem;

    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;

export const SearchButton = styled.input``;
