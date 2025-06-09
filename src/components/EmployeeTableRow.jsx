'use client'

import { SquarePen } from "lucide-react"
import { TableCell, TableRow } from "./ui/table"
import { DeleteBtn } from "./DeleteBtn"
import { useModal } from "@/hooks/useModal.hook"
import { EmployeeFormModal } from "./EmployeeFormModal"

export const EmployeeTableRow = () => {

    const { openModal } = useModal()

    return (
        <TableRow className="odd:bg-background even:bg-muted border-none rounded-lg">
            <TableCell className="font-bold min-w-[150px] flex items-center gap-2">
                <img src="/fallback-user-avatar.png" alt="" className="w-10 h-10 border p-1 rounded-full" />
                <p>Next Gen</p>
            </TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>
                <div className="text-right flex items-center justify-start gap-4">
                    <SquarePen
                        onClick={() => openModal(<EmployeeFormModal defaultValues={{ _id: 1 }} />)}
                        className="text-primary cursor-pointer border p-1 rounded-md w-7 h-7" strokeWidth={1.8}
                    />
                    <DeleteBtn />
                </div>
            </TableCell>
        </TableRow>
    )
}
