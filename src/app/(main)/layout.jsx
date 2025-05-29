import { AppLayout } from "@/components/AppLayout";
import { redirect } from "next/navigation";

export default function MainLayout({ children }) {

    const session = 1

    if (!session) {
        redirect('/auth/login')
    }

    return (
        <AppLayout>
            {children}
        </AppLayout>
    );
}
