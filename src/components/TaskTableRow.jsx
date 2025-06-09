'use client'

import { CircleArrowRight, SquarePen } from "lucide-react"
import { TableCell, TableRow } from "./ui/table"
import { DeleteBtn } from "./DeleteBtn"
import { useModal } from "@/hooks/useModal.hook"
import { TaskFormModal } from "./TaskFormModal"
import Link from "next/link"

export const TaskTableRow = () => {

    const { openModal } = useModal()

    return (
        <TableRow className="odd:bg-background even:bg-muted border-none rounded-lg">
            <TableCell className="font-bold min-w-[150px] flex items-center gap-2">
                <p>Demo Request</p>
            </TableCell>
            <TableCell className={'uppercase'}>COM-93HS</TableCell>
            <TableCell>
                <p className={`bg-green-100 text-green-800 font-medium w-fit px-4 py-1 rounded-full`}>Completed</p>
            </TableCell>
            <TableCell>23:05:283</TableCell>
            <TableCell>
                <div>
                    <p className="font-medium">Gilbert Lambert</p>
                    <p className="text-xs text-muted-foreground font-medium">Muster Coordinator</p>
                </div>
            </TableCell>
            <TableCell>
                <div className="text-right flex items-center justify-start gap-4">
                    <SquarePen
                        onClick={() => openModal(<TaskFormModal defaultValues={{ _id: 1 }} />)}
                        className="text-primary cursor-pointer border p-1 rounded-md w-7 h-7" strokeWidth={1.8}
                    />
                    <DeleteBtn />
                </div>
            </TableCell>
            <TableCell>
                <div className="flex items-center justify-start">
                    <Link href={`/tasks/${1}`}>
                        <CircleArrowRight strokeWidth={1.8} />
                    </Link>
                </div>
            </TableCell>
        </TableRow>
    )
}



