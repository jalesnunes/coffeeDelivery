import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import IllustrationImg from "../../assets/Illustration-ckeckout.png";
import {
  CheckoutContainer,
  ConfirmationData,
  OrderDetails,
  OrderImg,
} from "./style";
import { useCartContext } from "../../context/CartContext";

export function Checkout() {
  const {
    street,
    houseNumber,
    city,
    state,
    neighborhood,
    selectedPaymentOption,
  } = useCartContext();

  console.log(selectedPaymentOption)
  console.log(neighborhood)

  return (
    <CheckoutContainer>
      <OrderDetails>
        <div className="success-mensage">
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>

        <ConfirmationData>
          <div className="test">
            <div className="icon-rounded pin">
              <MapPin size={16} color="#FFFFFF" />
            </div>

            <div>
              <p>
                Entrega em{" "}
                <span>
                  Rua {street}, {houseNumber}
                </span>
              </p>
              <p>
                {neighborhood} - {city}, {state}
              </p>
            </div>
          </div>

          <div className="test">
            <div className="icon-rounded timer">
              <Timer size={16} color="#FFFFFF" />
            </div>

            <div>
              <p>Previsão de entrega</p>
              <p>
                <span>20 min - 30 min</span>
              </p>
            </div>
          </div>

          <div className="test">
            <div className="icon-rounded dollar">
              <CurrencyDollar size={16} color="#FFFFFF" />
            </div>

            <div>
              <p>Pagamento na entrega</p>
              <p>
                {selectedPaymentOption === "credit-card" ? (
                  <span>Cartão de Crédito</span>
                ) : selectedPaymentOption === "debit-card" ? (
                  <span>Cartão de Débito</span>
                ) : selectedPaymentOption === "money" ? (
                  <span>Dinheiro</span>
                ) : (
                  <span>Opção de pagamento não selecionada</span>
                )}
              </p>
            </div>
          </div>
        </ConfirmationData>
      </OrderDetails>

      <OrderImg>
        <img src={IllustrationImg} alt="" />
      </OrderImg>
    </CheckoutContainer>
  );
}
