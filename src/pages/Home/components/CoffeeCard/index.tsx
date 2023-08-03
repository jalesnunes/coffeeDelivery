import { CoffeeItem, QuantityOption } from "./styles";

import expressoImg from "../../../../assets/coffeeTypes/expresso.png";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";

export function CoffeeCard() {

  const [quantity, setQuantity] = useState(1)

  function handlePlusQuantity() {
    setQuantity(quantity + 1);
  }

  function handleMinusQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <CoffeeItem>
      <header>
        <img src={expressoImg} alt="" />
        <p>TRADICIONAL</p>
      </header>

      <h2>Expresso Tradicional</h2>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <QuantityOption>
        <p>
          R$ <span>9.90</span>
        </p>
        <div>
          <div className="minus" onClick={handleMinusQuantity}>
            <Minus size={14} color="#8047F8" />
          </div>

          <span>{quantity}</span>
          <div className="plus" onClick={handlePlusQuantity}>
            <Plus size={14} color="#8047F8" />
          </div>
        </div>

        <button type="submit">
          <ShoppingCart size={22} weight="fill" color="#FFFFFF" />
        </button>
      </QuantityOption>
    </CoffeeItem>
  );
}
