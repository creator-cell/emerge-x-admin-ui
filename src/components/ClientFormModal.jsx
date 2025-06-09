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
import { FlexInput } from "./FlexInput";
import { Button } from "./ui/button";

export const ClientFormModal = ({ onClose, defaultValues }) => {

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
                    <AlertDialogTitle>{isEdit ? "Update Client" : "Add New Client"}</AlertDialogTitle>
                </AlertDialogHeader>

                <div className="space-y-4">

                    <FlexInput label={'Company Name'} name="companyName" isRequired={true} placeholder="Enter Company Name" />

                    <FlexInput label={'Logo'} type="file" name="logo" isRequired={true} />

                    <FlexInput label={'Location'} name="location" isRequired={true} placeholder="Your Branch Location" />

                    <FlexInput label={'Type Of Business'} name="businessType" isRequired={true} placeholder="Enter Business Type" />

                    <FlexInput type="number" label={'Emeregency Contact Number'} name="emergencyContactNumber" isRequired={true} placeholder="Enter Emergency Contact" />

                    <FlexInput type="email" label={'Email ID'} name="email" isRequired={true} placeholder="Enter Email ID" />

                    <FlexInput type="number" label={'Contact Number'} name="contactNumber" isRequired={true} placeholder="Contact Number" />

                </div>

                <AlertDialogFooter className={'flex flex-row items-center justify-end gap-4'}>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Button type="submit">Save</Button>
                </AlertDialogFooter>

            </form>

        </AlertDialogContent>

    </AlertDialog>
};
