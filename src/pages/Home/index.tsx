import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  CoffeeList,
  DescriptionContent,
  DescriptionImg,
  DescriptionSec,
  HomeContainer,
  OurCoffees,
} from "./styles";

import storeItems from "../../data/items.json";

import img from "../../assets/coffeeCup.png";
import { CoffeeCard } from "./components/CoffeeCard";

export function Home() {
  
  console.log(storeItems)

  return (
    <HomeContainer>
      <DescriptionSec>
        <DescriptionContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <div className="ccontent">
            <div className="items">
              <div className="icon-rounded item-1">
                <ShoppingCart size={16} weight="fill" color="#FFFFFF" />
              </div>
              <span>Compra simples e segura</span>
            </div>

            <div className="items">
              <div className="icon-rounded item-2">
                <Timer size={16} weight="fill" color="#FFFFFF" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </div>

            <div className="items">
              <div className="icon-rounded item-3">
                <Package size={16} weight="fill" color="#FFFFFF" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div className="items">
              <div className="icon-rounded item-4">
                <Coffee size={16} weight="fill" color="#FFFFFF" />
              </div>
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </DescriptionContent>

        <DescriptionImg>
          <img src={img} alt="" />
        </DescriptionImg>
      </DescriptionSec>

      <OurCoffees>Nossos cafés</OurCoffees>
      <CoffeeList>
        {storeItems.map((coffeeStoreItem) => {
          return (
            <CoffeeCard
              key={coffeeStoreItem.id}
              coffeeStoreItem={coffeeStoreItem}
            />
          );
        })}
      </CoffeeList>
    </HomeContainer>
  );
}
