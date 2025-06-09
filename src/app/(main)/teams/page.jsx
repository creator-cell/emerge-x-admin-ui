import { Controller } from "@/components/Controller";
import { TeamFormModal } from "@/components/TeamFormModal";
import { TeamTableRow } from "@/components/TeamTableRow";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const teams = async (props) => {
    const searchParams = await props.searchParams;

    return (
        <div>
            <Controller searchParams={searchParams} pageEnd={1} addText={'Add Team'} AddModalComponent={TeamFormModal} />
            <div className="rounded-xl overflow-hidden">
                <Table>
                    <TableHeader className="uppercase bg-muted">
                        <TableRow className={'text-gray-300'}>
                            <TableHead className="">Team</TableHead>
                            <TableHead>ID</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Team of</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {new Array(10).fill(0)?.map((_, index) => <TeamTableRow key={index} />)}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default teams