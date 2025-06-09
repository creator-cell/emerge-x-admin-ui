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

export const EmployeeFormModal = ({ onClose, defaultValues }) => {

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
                    <AlertDialogTitle>{isEdit ? "Edit Employee" : "Add New Employee"}</AlertDialogTitle>
                </AlertDialogHeader>

                <div className="space-y-4">

                    <FlexInput label={'Name'} isRequired={true} name="name" placeholder="Enter Name" />

                    <FlexInput label={'Email'} isRequired={true} name="email" placeholder="Enter Email ID" type="email" />

                    <FlexInput label={'Contact Number'} isRequired={true} name="contactNumber" placeholder="Enter Contact Number" type="number" />

                    <FlexInput label={'Designation'} isRequired={true} name="designation" placeholder="Enter Designation" />

                </div>

                <AlertDialogFooter className={'flex flex-row items-center justify-end gap-4'}>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Button type="submit">Save</Button>
                </AlertDialogFooter>
            </form>
        </AlertDialogContent>
    </AlertDialog>
};
