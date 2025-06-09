'use client';

import { usePage } from "@/hooks/usePage.hook";
import { ChevronLeft, ChevronRight, Plus, Search } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useModal } from "@/hooks/useModal.hook";

export const Controller = ({
    searchParams,
    pageEnd,
    addText,
    AddModalComponent
}) => {

    const router = useRouter();
    const pathname = usePathname();
    const { activeLabel } = usePage()
    const { openModal } = useModal()

    const page = Number(searchParams?.page) || 1
    const lastPage = Number(pageEnd) || 1

    const onSearch = (e) => {
        if (e.key === 'Enter') {
            const value = e.target.value.trim();

            if (value) {
                router.replace(`${pathname}?q=${encodeURIComponent(value)}`);
            } else {
                router.replace(`${pathname}`);
            }
        }
    };

    return (
        <div className="w-full space-y-4">

            <h2 className="text-xl md:text-2xl font-bold capitalize">{activeLabel}</h2>

            <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center w-full mb-6">

                {/* @flex-start section */}
                <div className="flex items-center gap-4">

                    <div className="flex items-center w-full md:w-[350px] gap-2 px-2 py-2 bg-muted rounded-md border">
                        <Search className="text-muted-foreground" />
                        <input
                            placeholder="Search..."
                            onKeyDown={onSearch}
                            onChange={({ target: { value } }) => !value.trim() && router.replace(pathname)}
                            className="w-full outline-none"
                            type="search"
                        />
                    </div>
                </div>

                {/* flex-end section */}
                <div className="flex items-center gap-4 justify-between md:justify-end">

                    {/* Pagination */}
                    <div className="flex items-center gap-2">
                        <Link
                            href={{ pathname, query: { page: page - 1 } }}
                            onClick={(e) => page === 1 && e.preventDefault()}
                            className={`p-2 rounded-lg border bg-muted hover:bg-gray-100 transition ${page === 1 ? 'opacity-40 pointer-events-none' : ''}`}
                        >
                            <ChevronLeft />
                        </Link>

                        <span className="text-base">
                            {page} of {lastPage}
                        </span>

                        <Link
                            href={{ pathname, query: { page: page + 1 } }}
                            onClick={(e) => page === lastPage && e.preventDefault()}
                            className={`p-2 rounded-lg border bg-muted hover:bg-gray-100 transition ${page === lastPage ? 'opacity-40 pointer-events-none' : ''}`}
                        >
                            <ChevronRight />
                        </Link>
                    </div>

                    {/* Add Button */}
                    {addText && AddModalComponent && (
                        <Button size="lg" onClick={() => openModal(<AddModalComponent />)}>
                            <Plus className="border border-white rounded-sm p-[1px] text-white" strokeWidth={1.7} />
                            {addText}
                        </Button>
                    )}


                </div>
            </div>
        </div>

    );
};

