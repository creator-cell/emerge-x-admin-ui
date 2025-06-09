
import { BackButton } from "@/components/BackButton";
import { ClientFormModal } from "@/components/ClientFormModal";
import { EditBtn } from "@/components/EditBtn";

const client_detail_view = async (props) => {

    const params = await props.params;

    return (
        <div className="rounded-lg max-w-7xl">
            <BackButton path="/clients" />
            <div className="bg-muted w-full rounded-t-lg p-4 border-x mt-4 border-t flex items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                    <img src="/dummy_avatar.png" alt="avatar" className="w-14" />
                    <div>
                        <p className="font-bold text-lg">Skyline</p>
                        <p className="uppercase text-gray-500 text-sm font-medium">COM-945</p>
                    </div>
                </div>

                <div>
                    <EditBtn EditModalComponent={ClientFormModal} defaultValues={{ _id: 1 }} />
                </div>
            </div>

            <div className="p-4 shadow-md rounded-b-lg border-x border-b">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div>
                        <p className="text-sm font-medium text-gray-500">Type of Business</p>
                        <p>Real Estate</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500">Email ID</p>
                        <p>skyline@gmail.com</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500">Contact Number</p>
                        <p>+21 4335 3432</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500">Location</p>
                        <p>Near Business Bay Metro Station - Dubai - United Arab Emirates</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500">Password</p>
                        <p>************</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default client_detail_view