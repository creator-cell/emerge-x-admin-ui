'use client';

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useSession } from "./useSession.hook";
import { Building2, CalendarCheck2, Files, Flame, Headset, LayoutDashboard, MessageCircle, ReceiptText, ShieldHalf, ShieldUser, TvMinimalPlay, UsersRound } from "lucide-react";

const mainPages = [
    { label: 'Dashboard', Icon: LayoutDashboard, path: '/', roles: [] },
    { label: 'Tasks', Icon: CalendarCheck2, path: '/tasks', roles: [] },
    { label: 'Clients', Icon: UsersRound, path: '/clients', roles: [] },
    { label: 'Demo Requests', Icon: TvMinimalPlay, path: '/demo-requests', roles: [] },
    { label: 'Team', Icon: ShieldUser, path: '/teams', roles: [] },
    { label: 'Roles', Icon: ShieldHalf, path: '/roles', roles: ['admin'] },
    { label: 'Chat', Icon: MessageCircle, path: '/chat', roles: [] },
    { label: 'Support', Icon: Headset, path: '/support', roles: [] },
    { label: 'Company Details', path: '/clients', Icon: Building2, contextPath: ['clients'] },
    { label: 'Subscription', path: '/clients/subscription', Icon: Flame, contextPath: ['clients'] },
    { label: 'Invoice', path: '/clients/invoice', Icon: ReceiptText, contextPath: ['clients'] },
    { label: 'Documents', path: '/clients/documents', Icon: Files, contextPath: ['clients'] },
]


export const usePage = () => {

    const pathname = usePathname();
    const session = useSession();

    const pages = useMemo(() => {
        const contextKey = pathname.split('/')[1];

        return mainPages.filter(page => {
            if (!page.contextPath) return contextKey !== 'clients';
            return page.contextPath.includes(contextKey);
        });
    }, [pathname, session]);

    const pageMap = useMemo(() => {
        const map = new Map();
        pages.forEach(({ label, path }) => map.set(path, label));
        return map
    }, [])

    const activeLabel = useMemo(() => {
        const result = pageMap.get(pathname);
        if (result) return result;
        const parts = pathname.split("/");
        parts.pop();
        const extracted_part = parts.join("/");
        return pageMap.get(extracted_part);
    }, [pathname])

    const isActive = (path) => {
        if (path === '/') return path === pathname;
        return pathname.includes(path)
    }

    return { pages, activeLabel, isActive }
}