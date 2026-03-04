

import { PencilIcon, TrashIcon } from "@phosphor-icons/react"
import type Estabelecimento from "../../models/Estabelecimento"

export interface CardEstabelecimentoProps {
  estabelecimento: Estabelecimento
}

function CardEstabelecimento({estabelecimento}:CardEstabelecimentoProps) {
  return (
    <div className="m-2 flex w-200 items-center justify-between overflow-hidden rounded-md border bg-green-950 pl-2 shadow-md">
      {/* Div com os atributos e botões */}
      <div className="flex justify-between items-center h-full w-full rounded-md bg-gray-100">
        {/* Div com os atributos */}
        <div className="ml-3 flex flex-col gap-1">
          <p className="font-semibold">Estabelecimento: {estabelecimento.nome}</p>
          <p className="font-semibold">Categoria: {estabelecimento.categoria}</p>
          <p className="font-semibold">Taxa de entrega: {estabelecimento.taxa_entrega}</p>
        </div>

        {/* Div com os botões */}
        <div className="flex m-2 flex-col gap-2">
          <button className="rounded border p-1">
            <PencilIcon size={30} />
          </button>

          <button className="rounded border text-red- p-1">
            <TrashIcon size={30} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardEstabelecimento
