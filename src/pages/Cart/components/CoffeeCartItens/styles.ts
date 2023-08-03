import styled from "styled-components"

export const CoffeeCartItensContainer = styled.div `
display: flex;
gap: 1rem;

align-items: start;

`

export const ImgContainer = styled.div `
 img {
    height: 4rem;
    width: 4rem;
 }
`

export const CoffeeDetailsContainer = styled.div `

div {
    width: 4.5rem;
    height: 2.375rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

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
`

export const PriceContainer = styled.div `
`