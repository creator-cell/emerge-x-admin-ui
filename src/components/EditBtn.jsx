'use client'

import { useModal } from '@/hooks/useModal.hook'
import { SquarePen } from 'lucide-react'

export const EditBtn = ({ EditModalComponent, defaultValues = {} }) => {

    const { openModal } = useModal();

    return (
        <SquarePen className="text-gray-500 cursor-pointer" onClick={() => openModal(<EditModalComponent defaultValues={defaultValues} />)} />
    )
}
