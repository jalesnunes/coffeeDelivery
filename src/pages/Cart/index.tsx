import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";
import { CoffeeCartItens } from "./components/CoffeeCartItens";
import { CartContainer, ItensSection, OrderSection } from "./styles";

export function Cart() {
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
              <button>
                <CreditCard size={16} color="#8047F8" />
                CARTAO DE CREDITO
              </button>
              <button>
                <Bank size={16} color="#8047F8" />
                CARTAO DE DEBITO
              </button>
              <button>
                <Money size={16} color="#8047F8" />
                DINHEIRO
              </button>
            </div>
          </div>
        </OrderSection>

        <ItensSection>
          <h2>Cafes selecionados</h2>
          <CoffeeCartItens />
          <CoffeeCartItens />
          <p>Total de itens</p>
          <span>R$ 29,70</span>
          <p>Entrega</p>
          <span>R$ 3,50</span>

          <p>Total</p>
          <span>R$ 33.20</span>

          <button type="submit">Confirmar Pedido</button>
        </ItensSection>
      </form>
    </CartContainer>
  );
}
