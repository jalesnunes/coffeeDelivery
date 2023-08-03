import expressoImg from "../../../../assets/coffeeTypes/expresso.png";
import { Minus, Plus, Trash } from 'phosphor-react'
import { CoffeeCartItensContainer, CoffeeDetailsContainer, ImgContainer, PriceContainer } from "./styles";

export function CoffeeCartItens() {
    return (
        <CoffeeCartItensContainer>
            <ImgContainer>
                 <img src={expressoImg} />
            </ImgContainer>
            
            <CoffeeDetailsContainer>
            <p>Expresso Tradicional</p>
            <div>
                <Minus size={14}  color="#8047F8"/>
                <span>1</span>
                <Plus size={14} color="#8047F8"/>
                <button>
                    <Trash size={16} color='#8047F8' />
                    Remover
                </button>
            </div>
            </CoffeeDetailsContainer>

            <PriceContainer>
                <p>R$ <span>9.90</span></p>
            </PriceContainer>
        </CoffeeCartItensContainer>
        
    )
}