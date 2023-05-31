import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    div {
      width: 10rem;
      height: 2.5rem;

      display: flex;
      align-items: center;

      background: ${(props) => props.theme["purple-light"]};

      border-radius: 0.375rem;
      padding: .5rem;

      span {
        color: ${(props) => props.theme["purple-dark"]};
      }
    }

    a {
      width: 2.5rem;
      height: 2.5rem;

      display: flex;
      align-items: center;

      padding: .5rem;
      border-radius: 0.375rem;

      background: ${(props) => props.theme["yellow-light"]};
    }
  }
`;
