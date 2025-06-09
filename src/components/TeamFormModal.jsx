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

export const TeamFormModal = ({ onClose, defaultValues }) => {

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
                    <AlertDialogTitle>{isEdit ? "Update Team" : "Add New Team"}</AlertDialogTitle>
                </AlertDialogHeader>

                <div className="space-y-4">

                    <FlexInput label={'Team Name'} isRequired={true} name="name" placeholder="Enter Team Name" />

                    <FlexInput as="textarea" label={'Description'} isRequired={true} name="description" placeholder="Write Description" className="h-28" />

                    <FlexInput label={'Role'} isRequired={true}>
                        <select required className="border text-sm p-[10px] rounded-md dark:bg-[#121720]" name="role">
                            <option value="" className="text-gray-300">-- Select --</option>
                            <option value="VTS">VTS</option>
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
