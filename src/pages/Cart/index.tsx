import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money} from 'phosphor-react'
import { CoffeeCartItens } from './components/CoffeeCartItens'

export function Cart() {
    return (
        <>
            <h2>Complete seu pedido</h2>

            <form>
                <h3>Endereco de entrega</h3>
                <MapPinLine size={24} color="#C47F17"  />
                <p>Informe o endereco onde deseja receber seu pedido</p>
                <input type="number" placeholder='CEP' />
                <input type="text" placeholder='Rua' />
                <input type="number" placeholder='Numero' />
                <input type="text" placeholder='Complemento' />
                <input type="text" placeholder='Bairro' />
                <input type="text" placeholder='Cidade' />
                <input type="text" placeholder='UF' />

                <CurrencyDollar size={24} color='#8047F8' />
                <h3>Pagamento</h3>
                <p>O pagamento e feito na estrega. Escolha a forma que deseja pagar</p>
                <button>
                    <CreditCard size={16} color='#8047F8' />
                    CARTAO DE CREDITO
                </button>
                <button>
                    <Bank size={16} color='#8047F8' />
                    CARTAO DE DEBITO
                </button>
                <button>
                    <Money size={16} color='#8047F8' />
                    DINHEIRO
                </button>

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
            </form>
        </>
    )
}