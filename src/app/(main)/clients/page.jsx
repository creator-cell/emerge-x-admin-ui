import { ClientFormModal } from "@/components/ClientFormModal";
import { ClientTableRow } from "@/components/ClientTableRow";
import { Controller } from "@/components/Controller";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const clients = async (props) => {

    const searchParams = await props.searchParams;

    return (
        <div>
            <Controller searchParams={searchParams} pageEnd={1} addText={'Add Client'} AddModalComponent={ClientFormModal} />
            <div className="rounded-xl overflow-hidden">
                <Table>
                    <TableHeader className="uppercase bg-muted">
                        <TableRow className={'text-gray-300'}>
                            <TableHead className="">Client</TableHead>
                            <TableHead>ID</TableHead>
                            <TableHead>Type of Business</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Actions</TableHead>
                            <TableHead>View</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {new Array(10).fill(0)?.map((_, index) => <ClientTableRow key={index} />)}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default clients;
