'use client'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "./ui/button";
import { FlexInput } from "./FlexInput";
import { Switch } from "./ui/switch";

export const RoleFormModal = ({ onClose, defaultValues }) => {

    const isEdit = !!defaultValues?._id;

    const handleSubmit = () => {
        if (isEdit) {

        } else {

        }
        onClose();
    };

    return <AlertDialog defaultOpen={true} onOpenChange={onClose}>
        <AlertDialogContent>
            <form onSubmit={handleSubmit} className="space-y-4">
                <AlertDialogHeader>
                    <AlertDialogTitle>{isEdit ? "Update Role" : "Add New Role"}</AlertDialogTitle>
                </AlertDialogHeader>

                <div className="space-y-4">
                    <FlexInput name="name" label={'Name'} isRequired={true} placeholder="Enter Role Name" />
                    <FlexInput name="description" label={'Description'} isRequired={true} placeholder="Write Role Description" as="textarea" className='h-24' />

                    {/* <div className="space-y-4">

                        <h1 className="text-sm font-medium">Provide Module Access</h1>

                        <div className="flex text-sm text-gray-600 items-center w-full gap-10">
                            <p className="basis-44">Employee Module</p>
                            <Switch />
                        </div>

                        <div className="flex text-sm text-gray-600 items-center w-full gap-10">
                            <p className="basis-44">Employee Module</p>
                            <Switch />
                        </div>

                        <div className="flex text-sm text-gray-600 items-center w-full gap-10">
                            <p className="basis-44">Role Module</p>
                            <Switch />
                        </div>

                        <div className="flex text-sm text-gray-600 items-center w-full gap-10">
                            <p className="basis-44">Demo Request Module</p>
                            <Switch />
                        </div>

                        <div className="flex text-sm text-gray-600 items-center w-full gap-10">
                            <p className="basis-44">Clients Module</p>
                            <Switch />
                        </div>

                        <div className="flex text-sm text-gray-600 items-center w-full gap-10">
                            <p className="basis-44">Team Module</p>
                            <Switch />
                        </div>

                        <div className="flex text-sm text-gray-600 items-center w-full gap-10">
                            <p className="basis-44">Chat Module</p>
                            <Switch />
                        </div>

                        <div className="flex text-sm text-gray-600 items-center w-full gap-10">
                            <p className="basis-44">Task Module</p>
                            <Switch />
                        </div>

                    </div> */}

                </div>


                <AlertDialogFooter className={'flex flex-row items-center justify-end gap-4'}>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Button type="submit">Save</Button>
                </AlertDialogFooter>
            </form>
        </AlertDialogContent>
    </AlertDialog>
};
