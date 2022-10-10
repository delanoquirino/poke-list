import styled from "styled-components";

export const Container = styled.div``;

export const TiltleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  h1 {
    color: var(--red-color);
    text-align: center;
    font-size: 3rem;
    margin-right: 0.5rem;
  }

  span {
    color: var(--blue-color);
  }
`;

export const PokemonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  list-style: none;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`;
