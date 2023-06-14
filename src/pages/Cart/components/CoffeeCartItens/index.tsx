import expressoImg from "../../../../assets/coffeeTypes/expresso.png";
import { Minus, Plus, Trash } from 'phosphor-react'

export function CoffeeCartItens() {
    return (
        <>
            <img src={expressoImg} />
            <p>Expresso Tradicional</p>
            <p>R$ <span>9.90</span></p>
            <div>
                <Minus size={14}  color="#8047F8"/>
                <span>1</span>
                <Plus size={14} color="#8047F8"/>
                <button>
                    <Trash size={16} color='#8047F8' />
                    Remover
                </button>
            </div>
        </>
    )
}