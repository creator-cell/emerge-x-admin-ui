"use client";

import { ChatIcon, ClientListIcon, DashboardIcon, DemoRequestIcon, RoleIcon, SupportIcon, TaskListIcon, TeamIcon } from "@/assets/icons/svg-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Dashboard",
    icon: DashboardIcon,
    href: "/",
  },
  {
    label: "Task list",
    icon: TaskListIcon,
    href: "/task-list",
  },
  {
    label: "Client list",
    icon: ClientListIcon,
    href: "/client-list",
  },
  {
    label: "Demo request",
    icon: DemoRequestIcon,
    href: "/demo-request",
  },
  {
    label: "Team",
    icon: TeamIcon,
    href: "/team",
  },
  {
    label: "Chat",
    icon: ChatIcon,
    href: "/chat",
  },
  {
    label: "Role",
    icon: RoleIcon,
    href: "/role",
  },
  {
    label: "Support",
    icon: SupportIcon,
    href: "/support",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-white">
      <div className="px-3 py-2">
        <div className="space-y-1">
          {routes.map((route) => {
            const isActive = pathname === route.href;
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 rounded-lg transition",
                  isActive ? "text-green-600" : "text-black-500"
                )}
              >
                <div className="flex items-center flex-1 gap-4">
                  <route.icon fill={isActive ? "#16A34A" : undefined} /> {/* Dynamically pass fill */}
                  <div className="text-[16px]">
                    {route.label}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
