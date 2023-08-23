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

export function Cart() {
  const { cartItems, cartQuantity } = useCartContext();

  const itemPrice = Number(9.9 * cartQuantity).toFixed(2);
  const total = Number(3.5 + parseFloat(itemPrice)).toFixed(2);

  return (
    <CartContainer>
      <form>
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
              <input type="text" className="rua" placeholder="Rua" />
              <input type="number" className="numero" placeholder="Numero" />
              <input
                type="text"
                className="complemento"
                placeholder="Complemento"
              />
              <input type="text" className="bairro" placeholder="Bairro" />
              <input type="text" className="cidade" placeholder="Cidade" />
              <input type="text" className="uf" placeholder="UF" />
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
                <button type="submit">Confirmar Pedido</button>{" "}
              </>
            ) : (
              <div className="empty">
                Seu carrinho está vazio.
              </div>
            )}
            {/* <div className="total-itens">
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
            </div> */}
          </div>
        </ItensSection>
      </form>
    </CartContainer>
  );
}
