import React from "react";
import { CreditCard, Bank, Money } from "phosphor-react";
import styled from "styled-components";

interface PaymentOptionProps {
  selected: boolean;
  onClick: () => void;
}

export const CreditCardOption = styled.div<PaymentOptionProps>`
  width: 12rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 12px;
  background: ${({ selected }) => (selected ? "#EBE5F9" : "#E6E5E5")};
  border: 2px solid ${({ selected }) => (selected ? "#8047F8" : "white")};
  border-radius: 8px;
  cursor: pointer;

  transition: .3s;

  &:hover {
    background: ${({ selected }) => (selected ? "#EBE5F9" : "#D7D5D5")};
  }
`;

export const CreditCardOptionComponent: React.FC<PaymentOptionProps> = ({
  selected,
  onClick,
}) => (
  <CreditCardOption selected={selected} onClick={onClick}>
    <CreditCard size={24} color="#8047F8"/>
    Cartão de Crédito
  </CreditCardOption>
);

export const DebitCardOption = styled.div<PaymentOptionProps>`
  width: 12rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 12px;
  background: ${({ selected }) => (selected ? "#EBE5F9" : "#E6E5E5")};
  border: 2px solid ${({ selected }) => (selected ? "#8047F8" : "white")};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: ${({ selected }) => (selected ? "#EBE5F9" : "#D7D5D5")};
  }
`;

export const DebitCardOptionComponent: React.FC<PaymentOptionProps> = ({
  selected,
  onClick,
}) => (
  <DebitCardOption selected={selected} onClick={onClick}>
    <Bank size={24} color="#8047F8"/>
    Cartão de Débito
  </DebitCardOption>
);

export const MoneyOption = styled.div<PaymentOptionProps>`
  width: 12rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 12px;
  background: ${({ selected }) => (selected ? "#EBE5F9" : "#E6E5E5")};
  border: 2px solid ${({ selected }) => (selected ? "#8047F8" : "white")};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: ${({ selected }) => (selected ? "#EBE5F9" : "#D7D5D5")};
  }
`;

export const MoneyOptionComponent: React.FC<PaymentOptionProps> = ({
  selected,
  onClick,
}) => (
  <MoneyOption selected={selected} onClick={onClick}>
    <Money size={24} color="#8047F8"/>
    Dinheiro
  </MoneyOption>
);
