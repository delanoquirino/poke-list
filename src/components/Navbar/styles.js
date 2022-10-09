import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  background-color: var(--yellow-color);
  border-bottom: 1px solid var(--red-color);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const LinkItems = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;

  a {
    color: var(--text-font);
    text-decoration: none;
    padding: 5px;
    transition: 0.4s;
    border-bottom: 2px solid transparent;
  }

  a:hover {
    border-color: var(--red-color);
  }
`;
