import { useState } from 'react';
import styled from 'styled-components';
import { CreditCardOptionComponent, DebitCardOptionComponent, MoneyOptionComponent } from './styles';

const PaymentPageContainer = styled.div`

  display: flex;
  gap: 1rem;
`;

export const PaymentSelection = () => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('credit-card');

  const handlePaymentOptionClick = (option: string) => {
    setSelectedPaymentOption(option);
  };

  return (
    <PaymentPageContainer>
      <CreditCardOptionComponent
        selected={selectedPaymentOption === 'credit-card'}
        onClick={() => handlePaymentOptionClick('credit-card')}
      />
      <DebitCardOptionComponent
        selected={selectedPaymentOption === 'debit-card'}
        onClick={() => handlePaymentOptionClick('debit-card')}
      />
      <MoneyOptionComponent
        selected={selectedPaymentOption === 'money'}
        onClick={() => handlePaymentOptionClick('money')}
      />
      {/* Outros campos e elementos da página */}
    </PaymentPageContainer>
  );
};