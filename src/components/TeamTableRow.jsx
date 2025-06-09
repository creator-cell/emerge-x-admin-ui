'use client'

import { SquarePen } from "lucide-react"
import { TableCell, TableRow } from "./ui/table"
import { DeleteBtn } from "./DeleteBtn"
import { useModal } from "@/hooks/useModal.hook"
import { TeamFormModal } from "./TeamFormModal"

export const TeamTableRow = () => {

    const { openModal } = useModal()

    return (
        <TableRow className="odd:bg-background even:bg-muted border-none rounded-lg">
            <TableCell className="font-bold min-w-[150px] flex items-center gap-2">
                <p>EMERGENCY RESPONSE CENTER</p>
            </TableCell>
            <TableCell>COM-93HS</TableCell>
            <TableCell>VTS</TableCell>
            <TableCell>5</TableCell>
            <TableCell>
                <div className="text-right flex items-center justify-start gap-4">
                    <SquarePen
                        onClick={() => openModal(<TeamFormModal defaultValues={{ _id: 1 }} />)}
                        className="text-primary cursor-pointer border p-1 rounded-md w-7 h-7" strokeWidth={1.8}
                    />
                    <DeleteBtn />
                </div>
            </TableCell>
        </TableRow>
    )
}
