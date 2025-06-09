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

export const DemoRequestFormModal = ({ onClose, defaultValues }) => {

    const isEdit = !!defaultValues?._id;

    const handleSubmit = () => {
        if (isEdit) {

        } else {

        }
        onClose();
    };

    return <AlertDialog defaultOpen={true} onOpenChange={onClose}>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>{isEdit ? "Edit Demo Request" : "Add New Demo Request"}</AlertDialogTitle>
            </AlertDialogHeader>

            <form onSubmit={handleSubmit}>
                {/* your form here, use defaultValues for pre-fill */}
            </form>

            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Save</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
};
