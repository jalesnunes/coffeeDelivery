import { CoffeeItem, QuantityOption } from "./styles";

import storeItems from "../../../../data/items.json";

import expressoImg from "../../../../assets/coffeeTypes/expresso.png";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";

type RepositoryItemProps = {
  coffeeStoreItem: {
    id: number;
    tag: string;
    name: string;
    price: number;
    description: string;
    imgUrl: string;
  };
};

export function CoffeeCard(props: RepositoryItemProps) {
  const [quantity, setQuantity] = useState(1);

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
        <img src={props.coffeeStoreItem.imgUrl} alt="" />
        <p>{props.coffeeStoreItem.tag}</p>
      </header>

      <h2>{props.coffeeStoreItem.name}</h2>
      <p>{props.coffeeStoreItem.description}</p>

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
