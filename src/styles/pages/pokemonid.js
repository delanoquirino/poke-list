import styled from "styled-components";

export const Container = styled.div`
  text-align: center;

  h1 {
    background-color: var(--blue-color);
    padding: 0.5rem;
    margin: 1rem auto;
    width: 250px;

    font-size: 2rem;
    text-transform: uppercase;
    color: #fff;
  }
  h3 {
    margin: 0.6rem auto;
    font-size: 1.2rem;
  }
`;

export const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TypeClass = styled.div`
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: #000;

  border: 1px solid #fff;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 0.8rem;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;

  div {
    margin: 1rem 0;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
