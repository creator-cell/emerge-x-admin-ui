import { Controller } from "@/components/Controller";
import { EmployeeFormModal } from "@/components/EmployeeFormModal";
import { EmployeeTableRow } from "@/components/EmployeeTableRow";
import { TaskFormModal } from "@/components/TaskFormModal";
import { TaskTableRow } from "@/components/TaskTableRow";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { redirect } from "next/navigation";

const statusMap = [
    {
        label: 'Assigned Task',
        value: 'assigned'
    },
    {
        label: 'Unassigned Task',
        value: 'unassigned'
    }
]

const tasks = async (props) => {

    const searchParams = await props.searchParams;
    const status = searchParams.status || 'assigned';

    return (
        <div className="space-y-6">
            <Controller searchParams={{ ...searchParams, status: status }} pageEnd={1} addText={'Add Task'} AddModalComponent={TaskFormModal} />

            <div className="w-full flex items-center capitalize gap-8 text-sm">
                {statusMap?.map(({ label, value }) => <Link className={`${status === value && 'bg-linear-to-r from-primary to-[#247814] text-white font-medium px-4 py-1 rounded-full text-sm'}`} key={value} href={{ pathname: '/tasks', query: { status: value } }}>
                    {label}
                </Link>)}
            </div>

            <div className="rounded-xl overflow-hidden">
                <Table>
                    <TableHeader className="uppercase bg-muted">
                        <TableRow className={'text-gray-300'}>
                            <TableHead className="">Task</TableHead>
                            <TableHead>ID</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Timer</TableHead>
                            <TableHead>Assigned To</TableHead>
                            <TableHead>Actions</TableHead>
                            <TableHead>View</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {new Array(10).fill(0)?.map((_, index) => <TaskTableRow key={index} />)}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default tasks