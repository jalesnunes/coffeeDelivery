import { CoffeeItem, QuantityOption } from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { useCartContext } from "../../../../context/CartContext";

type CartItemProps = {
  coffeeStoreItem: {
    id: number;
    tag: string;
    name: string;
    price: number;
    description: string;
    imgUrl: string;
  };
};

export function CoffeeCard(props: CartItemProps) {

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useCartContext()

  const quantity = getItemQuantity(props.coffeeStoreItem.id)

  // const [quantity, setQuantity] = useState(1);

  // function handlePlusQuantity() {
  //   setQuantity(quantity + 1);
  // }

  // function handleMinusQuantity() {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // }


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
          <div className="minus" onClick={() => decreaseCartQuantity(props.coffeeStoreItem.id)} >
            <Minus size={14} color="#8047F8" />
          </div>

          <span>{quantity}</span>
          <div className="plus" onClick={() => increaseCartQuantity(props.coffeeStoreItem.id)}>
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
