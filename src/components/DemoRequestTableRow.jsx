'use client'

import { SquarePen } from "lucide-react"
import { TableCell, TableRow } from "./ui/table"
import { DeleteBtn } from "./DeleteBtn"
import { useModal } from "@/hooks/useModal.hook"
import { DemoRequestFormModal } from "./DemoRequestFormModal"

export const DemoRequestTableRow = () => {

    const { openModal } = useModal()

    return (
        <TableRow className="odd:bg-background even:bg-muted border-none rounded-lg">
            <TableCell className="font-bold min-w-[150px] flex items-center gap-2">
                <img src="/dummy_avatar.png" alt="" className="w-10 h-10 border p-1 rounded-full" />
                <p>Family First Reality</p>
            </TableCell>
            <TableCell className={'font-medium'}>COM-93HS</TableCell>
            <TableCell className={'font-medium text-muted-foreground'}>Real State</TableCell>
            <TableCell className={'font-medium'}>+21 4335 3432</TableCell>
            {/* <TableCell>
                <div className="text-right flex items-center justify-end gap-4">
                    <SquarePen
                        onClick={() => openModal(<DemoRequestFormModal defaultValues={{ _id: 1 }} />)}
                        className="text-primary cursor-pointer border p-1 rounded-md w-7 h-7" strokeWidth={1.8}
                    />
                    <DeleteBtn />
                </div>
            </TableCell> */}
        </TableRow>
    )
}
