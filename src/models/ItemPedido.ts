import type Pedido from "./Pedido"
import type Produto from "./Produto"

export default interface ItemPedido {
  id: number
  quantidade: number
  pedido: Pedido[]
  produto: Produto[]
}
