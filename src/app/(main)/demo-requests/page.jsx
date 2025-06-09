import { Controller } from "@/components/Controller";
import { DemoRequestFormModal } from "@/components/DemoRequestFormModal";
import { DemoRequestTableRow } from "@/components/DemoRequestTableRow";
import { EmployeeFormModal } from "@/components/EmployeeFormModal";
import { EmployeeTableRow } from "@/components/EmployeeTableRow";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const demo_requests = async (props) => {
    const searchParams = await props.searchParams;

    return (
        <div>
            <Controller searchParams={searchParams} pageEnd={1} addText={'Add Demo'} AddModalComponent={DemoRequestFormModal} />
            <div className="rounded-xl overflow-hidden">
                <Table>
                    <TableHeader className="uppercase bg-muted">
                        <TableRow className={'text-gray-300'}>
                            <TableHead className="">Client</TableHead>
                            <TableHead>ID</TableHead>
                            <TableHead>Type of Business</TableHead>
                            <TableHead>Contact</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {new Array(10).fill(0)?.map((_, index) => <DemoRequestTableRow key={index} />)}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default demo_requests