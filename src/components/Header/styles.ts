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
      padding: 0.5rem;

      span {
        color: ${(props) => props.theme["purple-dark"]};
      }
    }

    button {
      width: 2.5rem;
      height: 2.5rem;

      outline: none;
      text-decoration: none;
      border: none;

      /* display: flex;
      align-items: center; */

      padding: 0.5rem;
      border-radius: 0.375rem;

      background: ${(props) => props.theme["yellow-light"]};

      position: relative;

      .has-item {
        width: 1.25rem;
        height: 1.25rem;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 50%;

        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(55%, -135%);

        font-family: Roboto;
        font-size: 0.8rem;
        font-style: normal;
        font-weight: 700;
        background: ${(props) => props.theme["yellow-dark"]};
        color: ${(props) => props.theme["white"]};
      }
    }
  }
`;
