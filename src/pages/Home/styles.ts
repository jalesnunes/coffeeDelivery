import styled from "styled-components";

export const HomeContainer = styled.main`
  margin-top: 6rem;
`;

export const DescriptionSec = styled.section`
  display: flex;
`;

export const DescriptionContent = styled.div`
  width: 50%;

  h1 {
    font-family: "Baloo 2";
    font-size: 3rem;
    font-weight: 800;
    line-height: 3.9rem;
    color: ${(props) => props.theme["base-title"]};
  }

  h2 {
    font-family: "Roboto";
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.625rem;
    color: ${(props) => props.theme["base-subtitle"]};

    margin-bottom: 3rem;
  }

  span {
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3rem;
    color: ${(props) => props.theme["base-text"]};
  }

  div.ccontent {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  div.items {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0;
  }

  div.icon-rounded {
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
  }

  div.item-1 {
    background: ${(props) => props.theme["yellow-dark"]};
  }

  div.item-2 {
    background: ${(props) => props.theme["yellow"]};
  }

  div.item-3 {
    background: ${(props) => props.theme["base-text"]};
  }

  div.item-4 {
    background: ${(props) => props.theme["purple"]};
  }
`;

export const DescriptionImg = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoffeeList = styled.section`
  /* margin-top: .5rem; */
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const OurCoffees = styled.h1`
  font-family: "Baloo 2";
  font-size: 2rem;
  font-weight: 800;
  line-height: 2.6rem;
  color: ${(props) => props.theme["base-subtitle"]};
`;
