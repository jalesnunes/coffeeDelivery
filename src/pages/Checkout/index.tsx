import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import IllustrationImg from "../../assets/Illustration-ckeckout.png";
import {
  CheckoutContainer,
  ConfirmationData,
  OrderDetails,
  OrderImg,
} from "./style";

export function Checkout() {
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
              <p>Entrega em <span>Rua João Daniel Martinelli, 102</span></p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>

          <div className="test">
            <div className="icon-rounded timer">
              <Timer size={16} color="#FFFFFF" />
            </div>

            <div>
              <p>Previsão de entrega</p>
              <p><span>20 min - 30 min</span></p>
            </div>
          </div>

          <div className="test">
            <div className="icon-rounded dollar">
              <CurrencyDollar size={16} color="#FFFFFF" />
            </div>

            <div>
              <p>Pagamento na entrega</p>
              <p><span>Cartão de Crédito</span></p>
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
