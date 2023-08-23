import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

import LogoImg from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useCartContext } from "../../context/CartContext";

export function Header() {
    
  const { cartQuantity} = useCartContext()


  return (
    <HeaderContainer>
      <NavLink to='/' title="Home">
      <img src={LogoImg} />
      </NavLink>
      <nav>
        <div>
          <MapPin size={22} weight="fill" color="#4B2995" />
          <span>
            West Jordan, UT
          </span>
        </div>
        <NavLink to="/cart">
          <button>
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
            {cartQuantity > 0 ? <div className="has-item">{cartQuantity}</div> : ''}
          </button>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
