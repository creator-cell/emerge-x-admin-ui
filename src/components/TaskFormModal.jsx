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

export const TaskFormModal = ({ onClose, defaultValues }) => {

    const isEdit = !!defaultValues;

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
                    <AlertDialogTitle>{isEdit ? "Update Task" : "Create New Task"}</AlertDialogTitle>
                </AlertDialogHeader>

                <div className="space-y-4">

                    <FlexInput label={'Task Head'} isRequired={true}>
                        <select required className="border text-sm p-[10px] rounded-md dark:bg-[#121720]" name="head">
                            <option value="" className="text-gray-300">-- Select --</option>
                            <option value="Demo Request">Demo Request</option>
                        </select>
                    </FlexInput>

                    <FlexInput label={'Description'} isRequired={true} as="textarea" className="h-20" placeholder="Write Description ..." />

                    <FlexInput label={'Status'} isRequired={true}>
                        <select required className="border text-sm p-[10px] rounded-md dark:bg-[#121720]" name="status">
                            <option value="" className="text-gray-300">-- Select --</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                    </FlexInput>

                    <FlexInput label={'Assigned To'} isRequired={true}>
                        <select required className="border text-sm p-[10px] rounded-md dark:bg-[#121720]" name="assignedTo">
                            <option value="" className="text-gray-300">-- Select --</option>
                            <option value="John Doe">John Doe</option>
                            <option value="Liza Marry">Liza Marry</option>
                            <option value="Elizabeth">Elizabeth</option>
                        </select>
                    </FlexInput>
                </div>


                <AlertDialogFooter className={'flex flex-row items-center justify-end gap-4'}>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Button type="submit">Save</Button>
                </AlertDialogFooter>
            </form>
        </AlertDialogContent>
    </AlertDialog>
};
