'use client'

import { useTheme } from "@/hooks/useTheme.hook"
import Link from "next/link"

export const Logo = () => {
    const { isDark, mounted } = useTheme();

    if (!mounted) return null;

    return (
        isDark ? (
            <Link href="/">
                <img src="/logo.svg" alt="Emergex Logo" className="w-28 md:w-36" />
            </Link>
        ) : (
            <Link href="/">
                <img src="/logo.webp" alt="Emergex Logo" className="w-28 md:w-36" />
            </Link>
        )
    );
};
