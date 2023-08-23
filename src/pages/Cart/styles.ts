import styled from "styled-components";

export const CartContainer = styled.main`
  margin-top: 2.5rem;
  form {
    display: flex;
    gap: 1rem;
  }
`;

export const OrderSection = styled.section`
  width: 60%;

  h2 {
    font-family: "Baloo 2";
    font-size: 1.125rem;
    font-weight: 700;

    color: ${(props) => props.theme["base-subtitle"]};
  }

  .address {
    /* background: #b9b8b8; */
    background: ${(props) => props.theme["base-card"]};
    margin-top: 1rem;
    padding: 2.5rem;

    header {
      display: flex;
      gap: 0.5rem;

      div {
        h3 {
          font-size: 1rem;
          font-weight: 400;
          line-height: 20.8px;
          color: ${(props) => props.theme["base-subtitle"]};
        }

        P {
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 20.8px;
          color: ${(props) => props.theme["base-text"]};
        }
      }
    }

    div {
      input {
        outline: none;
        border: none;
        height: 2.625rem;

        padding-left: 0.8rem;
        background: ${(props) => props.theme["base-button"]};

        border-radius: 5px;
      }

      input::placeholder {
        font-size: 0.875rem;
        font-weight: 400;
        color: ${(props) => props.theme["base-text"]};
      }

      input:not(:first-child) {
        margin-top: 1rem;
      }

      .cep {
        display: block;

        margin-top: 2rem;
      }
      .rua {
        display: block;
        width: 100%;
      }
      .numero {
        margin-right: 0.5rem;
      }
      .complemento {
        width: 72%;
      }
      .bairro {
        margin-right: 0.5rem;
      }
      .cidade {
        width: 50%;
        margin-right: 0.5rem;
      }
      .uf {
        width: 5rem;
      }
    }
  }

  .payment-type {
    /* background: #b9b8b8; */
    background: ${(props) => props.theme["base-card"]};

    margin-top: 0.75rem;
    padding: 2.5rem;

    header {
      display: flex;
      gap: 0.5rem;

      div {
        h3 {
          font-size: 1rem;
          font-weight: 400;
          line-height: 20.8px;
          color: ${(props) => props.theme["base-subtitle"]};
        }

        P {
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 20.8px;
          color: ${(props) => props.theme["base-text"]};
        }
      }
    }

    .payment-method {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;

export const ItensSection = styled.section`
  width: 35%;

  .itens {
    padding: 2.5rem;
    background: ${(props) => props.theme["base-card"]};
  }

  h2 {
    font-family: "Baloo 2";
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-title"]};

    margin-bottom: 1rem;
  }

  .total-itens {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: "Roboto";
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-text"]};

    margin-bottom: .75rem;
  }

  .delivery-fee {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: "Roboto";
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-text"]};

    margin-bottom: .75rem;
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: "Roboto";
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-text"]};

    margin-bottom: 1.5rem;
  }

  button[type="submit"] {
    width: 100%;
    height: 2.5rem;
    text-decoration: none;
    border: none;
    background: ${(props) => props.theme["yellow"]};
    cursor: pointer;

    font-family: "Roboto";
    font-size: 0.875rem;
    font-weight: 700;
    color: ${(props) => props.theme["white"]};

    transition: .3s;
  }

  button[type="submit"]:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }

  .empty {
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Baloo 2";
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-text"]};
  }
`;
