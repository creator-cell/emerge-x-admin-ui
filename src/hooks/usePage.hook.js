'use client';

import { usePathname } from "next/navigation";
import { useCallback, useMemo } from "react";
import { useSession } from "./useSession.hook";
import { Building2, CalendarCheck2, Files, Flame, Headset, LayoutDashboard, MessageCircle, ReceiptText, ShieldHalf, ShieldUser, TvMinimalPlay, User, UsersRound } from "lucide-react";

const PAGE_GROUPS = {
    default: [
        { label: 'Dashboard', Icon: LayoutDashboard, path: '/', roles: [] },
        { label: 'Tasks', Icon: CalendarCheck2, path: '/tasks', roles: [] },
        { label: 'Clients', Icon: UsersRound, path: '/clients', roles: [] },
        { label: 'Demo Requests', Icon: TvMinimalPlay, path: '/demo-requests', roles: [] },
        { label: 'Employees', Icon: User, path: '/employees', roles: [] },
        { label: 'Team', Icon: ShieldUser, path: '/teams', roles: [] },
        { label: 'Roles', Icon: ShieldHalf, path: '/roles', roles: ['admin'] },
        { label: 'Chat', Icon: MessageCircle, path: '/chat', roles: [] },
        { label: 'Support', Icon: Headset, path: '/support', roles: [] },
    ],
    clients: [
        { label: 'Company Details', path: '/clients/${id}/company-details', Icon: Building2 },
        { label: 'Subscription', path: '/clients/${id}/subscription', Icon: Flame },
        { label: 'Invoice', path: '/clients/${id}/invoice', Icon: ReceiptText },
        { label: 'Documents', path: '/clients/${id}/documents', Icon: Files },
    ]
};

export const usePage = () => {
    const pathname = usePathname();
    const session = { role: 'admin' }


    const { context, clientId } = useMemo(() => {
        const parts = pathname.split('/');
        if (parts[1] === 'clients' && parts[2]) {
            return { context: 'clients', clientId: parts[2] };
        }
        return { context: 'default', clientId: null };
    }, [pathname]);


    const pages = useMemo(() => {
        const group = PAGE_GROUPS[context] || [];
        return group
            .map((page) => {
                const path = clientId ? page.path.replace('${id}', clientId) : page.path;
                return { ...page, path };
            })
            .filter((page) => {
                if (page.roles?.length) {
                    return session?.role && page.roles.includes(session.role);
                }
                return true;
            });
    }, [context, clientId, session]);


    const pageMap = useMemo(() => {
        return new Map(pages.map(({ path, label }) => [path, label]));
    }, [pages]);


    const activeLabel = useMemo(() => {
        if (pageMap.has(pathname)) return pageMap.get(pathname);
        const parentPath = pathname.split("/").slice(0, -1).join("/");
        return pageMap.get(parentPath);
    }, [pathname, pageMap]);


    const isActive = useCallback((path) => {
        return path === '/' ? pathname === '/' : pathname.startsWith(path);
    }, [pathname]);


    return { pages, activeLabel, isActive };
};
