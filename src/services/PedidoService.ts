import { buscar, cadastrar, atualizar, deletar } from "./Service"
import type Pedido from "../models/Pedido"

const authHeader = (token: string) => ({
  headers: { Authorization: token.startsWith("Bearer ") ? token : `Bearer ${token}` },
})

export async function buscarPedidos(token: string, setDados: (dados: Pedido[]) => void) {
  await buscar("/pedidos", setDados, authHeader(token))
}

export async function buscarPedidoPorId(
  id: number,
  token: string,
  setDados: (dados: Pedido) => void
) {
  await buscar(`/pedidos/${id}`, setDados, authHeader(token))
}

export async function cadastrarPedido(token: string, pedido: Pedido) {
  await cadastrar("/pedidos/cadastrar", pedido, () => undefined, authHeader(token))
}

export async function atualizarPedido(token: string, pedido: Pedido) {
  await atualizar("/pedidos/atualizar", pedido, () => undefined, authHeader(token))
}

export async function deletarPedido(token: string, id: number) {
  await deletar(`/pedidos/${id}`, authHeader(token))
}