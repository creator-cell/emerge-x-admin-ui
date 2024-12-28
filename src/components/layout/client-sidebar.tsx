"use client";

import {  CompanyDetailsIcon, DocumentsIcon, InvoiceIcon, TaskListIcon } from "@/assets/icons/svg-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Company Details",
    icon: CompanyDetailsIcon,
    href: "/client-list", // Base path for client list
  },
  {
    label: "Subscription",
    icon: TaskListIcon,
    href: "/client-list", // Base path for subscription
  },
  {
    label: "Invoice",
    icon: InvoiceIcon,
    href: "/client-list", // Base path for invoices
  },
  {
    label: "Documents",
    icon: DocumentsIcon,
    href: "/client-list", // Base path for documents
  },
  // Add more routes as needed
];

export function ClientSidebar() {
  const pathname = usePathname();
  const isClientDetailPage = pathname.startsWith("/client-list/") && pathname.split("/").length === 3; // Check if it's a client detail page

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-white">
      <div className="px-3 py-2">
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 rounded-lg transition",
                // Highlight "Company Details" when on client details page
                (route.label === "Company Details" && isClientDetailPage) || pathname === route.href
                  ? "text-green-600"
                  : "text-black-500"
              )}
            >
              <div className="flex items-center flex-1 gap-4">
                <route.icon />
                <div className="text-[16px]">{route.label}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
