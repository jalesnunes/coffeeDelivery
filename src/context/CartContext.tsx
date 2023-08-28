import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface CartContextData {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  setStreet: (street: string) => void;
  setHouseNumber: (houseNumber: string) => void;
  setCity: (city: string) => void;
  setState: (state: string) => void;
  setNeighborhood: (neighborhood: string) => void;
  setSelectedPaymentOption: (selectedPaymentOption: string) => void;
  cartQuantity: number
  cartItems: CartItem[];
  street: string
  houseNumber: string
  city: string
  state: string
  neighborhood: string
  selectedPaymentOption: string
}

type CartItem = {
  id: number;
  quantity: number;
};

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function useCartContext() {
    return useContext(CartContext)
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [street, setStreet] = useState('Rua')
  const [houseNumber, setHouseNumber] = useState('Numero')
  const [city, setCity] = useState('Cidade')
  const [state, setState] = useState('Estado')
  const [neighborhood, setNeighborhood] = useState('Bairro')

  const [selectedPaymentOption, setSelectedPaymentOption] = useState('credit-card');


  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

  

  useEffect(() => {
    console.log(selectedPaymentOption)
  }, [selectedPaymentOption]);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
        if(currItems.find(item => item.id === id) == null) {
            return [...currItems, { id, quantity: 1}]
        } else {
            return currItems.map(item => {
                if (item.id === id) {
                    return {...item, quantity: item.quantity + 1}
                } else {
                    return item
                }
            })
        }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
        if(currItems.find(item => item.id === id)?.quantity == 1) {
            return currItems.filter(item => item.id !== id)
        } else {
            return currItems.map(item => {
                if (item.id === id) {
                    return {...item, quantity: item.quantity - 1}
                } else {
                    return item
                }
            })
        }
    });
  }

  function removeFromCart(id: number) {
    setCartItems(currItems => {
        return currItems.filter(item => item.id !== id)
    })
  }

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems, 
        cartQuantity,
        street, 
        setStreet,
        houseNumber,
        setHouseNumber,
        city,
        setCity,
        state,
        setState,
        neighborhood,
        setNeighborhood,
        selectedPaymentOption,
        setSelectedPaymentOption
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
