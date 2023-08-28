import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";
import { CoffeeCartItens } from "./components/CoffeeCartItens";
import { CartContainer, ItensSection, OrderSection } from "./styles";
import { PaymentSelection } from "./components/PaymentSelection";
import { useCartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";

export function Cart() {
  const { cartItems, cartQuantity, street, setStreet, houseNumber, city, state, neighborhood, setHouseNumber, setCity, setState, setNeighborhood } = useCartContext();

  const itemPrice = Number(9.9 * cartQuantity).toFixed(2);
  const total = Number(3.5 + parseFloat(itemPrice)).toFixed(2);

  function handleSubmit() {

  }

  return (
    <CartContainer>
      <form onSubmit={handleSubmit}>
        <OrderSection>
          <h2>Complete seu pedido</h2>
          <div className="address">
            <header>
              <MapPinLine size={24} color="#C47F17" />
              <div>
                <h3>Endereco de entrega</h3>
                <p>Informe o endereco onde deseja receber seu pedido</p>
              </div>
            </header>

            <div>
              <input type="number" className="cep" placeholder="CEP" />
              <input type="text" className="rua" placeholder={street} onChange={(event) => {setStreet(event.target.value)}}/>
              <input type="text" className="numero" placeholder={houseNumber} onChange={(event) => {setHouseNumber(event.target.value)}}/>
              <input
                type="text"
                className="complemento"
                placeholder="Complemento"
              />
              <input type="text" className="bairro" placeholder={neighborhood} onChange={(event) => {setNeighborhood(event.target.value)}}/>
              <input type="text" className="cidade" placeholder={city} onChange={(event) => {setCity(event.target.value)}}/>
              <input type="text" className="uf" placeholder={state} onChange={(event) => {setState(event.target.value)}}/>
            </div>
          </div>

          <div className="payment-type">
            <header>
              <CurrencyDollar size={24} color="#8047F8" />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento e feito na estrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>

            <div className="payment-method">
              <PaymentSelection />
            </div>
          </div>
        </OrderSection>

        <ItensSection>
          <h2>Cafes selecionados</h2>
          <div className="itens">
            {cartItems.map((item) => (
              <CoffeeCartItens key={item.id} {...item} />
            ))}

            {cartQuantity > 0 ? (
              <>
                {" "}
                <div className="total-itens">
                  <p>Total de itens</p>
                  <span>{itemPrice}</span>
                </div>
                <div className="delivery-fee">
                  <p>Entrega</p>
                  <span>R$ 3,50</span>
                </div>
                <div className="total">
                  <p>Total</p>
                  <span>{total}</span>
                </div>
                <NavLink to="/checkout">
                   <button type="submit">Confirmar Pedido</button>{" "}
                </NavLink>
                
              </>
            ) : (
              <div className="empty">
                Seu carrinho está vazio.
              </div>
            )}
          </div>
        </ItensSection>
      </form>
    </CartContainer>
  );
}
