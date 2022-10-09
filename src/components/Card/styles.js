import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  width: 23%;
  border-radius: 1rem;
  border: 2px solid var(--blue-color);
  box-shadow: 5px 5px 12px var(--blue-color);
  background-color: var(--yellow-color);

  p {
    margin: 1rem 0;
    background-color: var(--blue-color);
    border-radius: 5px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    text-transform: capitalize;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
    background-color: var(--blue-color);
    color: var(--text-color);
    padding: 0.5rem 1.3rem;
    border-radius: 5px;
    font-weight: bold;
    transition: 0.5s;
  }
  a:hover {
    background-color: var(--red-color);
    color: #fff;
  }
`;
