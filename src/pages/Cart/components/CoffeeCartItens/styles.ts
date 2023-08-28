import styled from "styled-components";

export const CoffeeCartItensContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const ImgContainer = styled.div`
  img {
    height: 4rem;
    width: 4rem;
  }
`;

export const CoffeeDetailsContainer = styled.div`
  p {
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    .test {
      width: 4.5rem;
      height: 2rem;
      border-radius: 0.375rem;

      background: ${(props) => props.theme["base-button"]};

      .minus:hover {
        cursor: pointer;
      }

      .plus:hover {
        cursor: pointer;
      }

      span {
        font-size: 1rem;
        line-height: 1.3rem;

        color: ${(props) => props.theme["base-title"]};
      }
    }

    button {
      width: 5.688rem;
      height: 2rem;

      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      border: none;

      padding-left: 0.3rem;
      border-radius: 0.375rem;
      background: ${(props) => props.theme["base-button"]};

      cursor: pointer;

      span {
        font-family: "Roboto";
        font-size: 0.75rem;
        font-weight: 400;
        color: ${(props) => props.theme["base-text"]};
      }
    }
  }
`;

export const PriceContainer = styled.div`
  p {
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const BorderBottom = styled.div`
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  margin-bottom: 1rem;
`;
