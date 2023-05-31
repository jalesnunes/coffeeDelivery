import styled from "styled-components";

export const CoffeeItem = styled.div`
  width: 19rem;
  height: 21rem;

  /* margin-top: 3.375rem; */
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* background: red; */

  header {
    p {
      height: 1.3rem;
      font-weight: 700;
      font-size: 0.625rem;
      line-height: 0.813rem;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 100px;

      color: ${(props) => props.theme["yellow-dark"]};
      background: ${(props) => props.theme["yellow-light"]};
    }
  }

  h2 {
    font-family: "Baloo 2";
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.625rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  P {
    font-family: "Roboto";
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.1255rem;

    text-align: center;

    color: ${(props) => props.theme["base-label"]};
  }
`;

export const QuantityForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  P {
    font-size: 0.875rem;
        line-height: 1.138rem;
        color: ${(props) => props.theme["base-text"]};

    span {
        font-family: 'Baloo 2';
        font-size: 1.5rem;
        font-weight: 800;
        line-height: 1.95rem;
        color: ${(props) => props.theme["base-text"]};
    }
  }


  div {
    width: 4.5rem;
    height: 2.375rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    border-radius: 0.375rem;

    background: ${(props) => props.theme["base-button"]};

    span {
      font-size: 1rem;
      line-height: 1.3rem;

      color: ${(props) => props.theme["base-title"]};
    }
  }

  button {
      width: 2.375rem;
      height: 2.375rem;

      border: none;
      border-radius: 0.375rem;

      display: flex;
      align-items: center;
      justify-content: center;

      background: ${(props) => props.theme["purple-dark"]};
    }
`;
