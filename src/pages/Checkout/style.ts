import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 6rem;
`;

export const OrderDetails = styled.div`
  width: 50%;

  .success-mensage {
    margin-bottom: 1rem;

    h1 {
      font-family: "Baloo 2";
      font-size: 2rem;
      font-weight: 800;
      line-height: 2.6rem;

      color: ${(props) => props.theme["yellow-dark"]};
    }

    p {
      font-family: "Roboto";
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.625rem;

      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`;

export const ConfirmationData = styled.div`
  width: 28.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  border: 1px solid;
  border-image: linear-gradient(
      160deg,
      rgba(219, 172, 44, 1) 35%,
      rgba(128, 71, 248, 1) 81%
    )
    1;

  border-radius: 6px 36px;

  div.test {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      font-weight: 700;
    }
  }

  .icon-rounded {
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
  }

  .pin {
    background: ${(props) => props.theme["purple"]};
  }

  .timer {
    background: ${(props) => props.theme["yellow"]};
  }

  .dollar {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const OrderImg = styled.div`
  width: 50%;
`;
