'use client'

import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useTheme = () => {
    const { resolvedTheme, setTheme, theme } = useNextTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = resolvedTheme === "dark";

    return {
        isDark: mounted ? isDark : undefined,
        setAppTheme: setTheme,
        mounted,
        theme
    };
};
