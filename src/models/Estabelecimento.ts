import type Pedido from "./Pedido"
import type Usuario from "./Usuario"

export default interface Estabelecimento {
  id: number
  nome: string
  usuario?: Usuario | null
  categoria: string
  taxa_entrega: number
  pedido: Pedido
}
