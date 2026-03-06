import type Categoria from "./Categoria"
import type Estabelecimento from "./Estabelecimento"
import type Pedido from "./Pedido"

export default interface Produto {
  id: number
  nome: string
  descricao: string
  preco: number
  foto_produto: string
  calorias: string
  proteinas: string
  carboidratos: string
  gorduras: string
  categoria?: Categoria | null
  estabelecimento?: Estabelecimento
  pedidos?: Pedido[]
}
