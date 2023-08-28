import { Minus, Plus, Trash } from "phosphor-react";
import {
  BorderBottom,
  CoffeeCartItensContainer,
  CoffeeDetailsContainer,
  ImgContainer,
  PriceContainer,
} from "./styles";
import { useCartContext } from "../../../../context/CartContext";
import storeItems from '../../../../data/items.json'

type CoffeeCartItensProps = {
  id: number;
  quantity: number;
}

export function CoffeeCartItens({id, quantity}: CoffeeCartItensProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useCartContext()
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null
  return (
    <>
      <CoffeeCartItensContainer>
        <ImgContainer>
          <img src={item.imgUrl} />
        </ImgContainer>

        <CoffeeDetailsContainer>
          <p>{item.name}</p>

          <div>
            <div className="test">
              <div className="minus" onClick={() => decreaseCartQuantity(id)}>
                <Minus size={14} color="#8047F8" />
              </div>

              <span>{quantity}</span>

              <div className="plus" onClick={() => increaseCartQuantity(id)}>
                <Plus size={14} color="#8047F8" />
              </div>
            </div>

            <button onClick={() => removeFromCart(item.id)}>
              <Trash size={16} color="#8047F8" />
              <span>REMOVER</span>
            </button>
          </div>
        </CoffeeDetailsContainer>

        <PriceContainer>
          <p>
            R$ <span>{(item.price * quantity).toFixed(2)}</span>
          </p>
        </PriceContainer>
      </CoffeeCartItensContainer>
      <BorderBottom></BorderBottom>
    </>
  );
}
