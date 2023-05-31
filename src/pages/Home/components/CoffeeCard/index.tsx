import { CoffeeItem, QuantityForm } from "./styles";

import expressoImg from "../../../../assets/coffeeTypes/expresso.png";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

export function CoffeeCard() {
  return (
    <CoffeeItem>
      <header>
        <img src={expressoImg} alt="" />
        <p>TRADICIONAL</p>
      </header>

      <h2>Expresso Tradicional</h2>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <QuantityForm action="">
        <p>R$ <span>9.90</span></p>
        <div>
          <Minus size={14}  color="#8047F8"/>
          <span>1</span>
          <Plus size={14} color="#8047F8"/>
        </div>

        <button type="submit">
          <ShoppingCart size={22} weight="fill" color="#FFFFFF" />
        </button>
      </QuantityForm>
    </CoffeeItem>
  );
}
