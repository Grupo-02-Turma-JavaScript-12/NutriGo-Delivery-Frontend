import type Estabelecimento from "./Estabelecimento"
import type Usuario from "./Usuario"

export default interface Pedido {
  id?: number
  valor_total: number
  status: string
  usuario: { id: number } | Usuario
  estabelecimento: { id: number } | Estabelecimento
}