import expressoImg from "../../../../assets/coffeeTypes/expresso.png";
import { Minus, Plus, Trash } from "phosphor-react";
import {
  BorderBottom,
  CoffeeCartItensContainer,
  CoffeeDetailsContainer,
  ImgContainer,
  PriceContainer,
} from "./styles";

export function CoffeeCartItens() {
  return (
    <>
      <CoffeeCartItensContainer>
        <ImgContainer>
          <img src={expressoImg} />
        </ImgContainer>

        <CoffeeDetailsContainer>
          <p>Expresso Tradicional</p>

          <div>
            <div className="test">
              <div className="minus">
                <Minus size={14} color="#8047F8" />
              </div>

              <span>1</span>

              <div className="plus">
                <Plus size={14} color="#8047F8" />
              </div>
            </div>

            <button>
              <Trash size={16} color="#8047F8" />
              <span>REMOVER</span>
            </button>
          </div>
        </CoffeeDetailsContainer>

        <PriceContainer>
          <p>
            R$ <span>9.90</span>
          </p>
        </PriceContainer>
      </CoffeeCartItensContainer>
      <BorderBottom></BorderBottom>
    </>
  );
}
