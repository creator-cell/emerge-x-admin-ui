import { Navbar } from "./Navbar"
import { Sidebar } from "./Sidebar"

export const AppLayout = ({ children }) => {
    return (
        <div className="max-h-screen">

            <Navbar />

            <div className="flex w-full h-[calc(100vh-64px)]">

                <div className="hidden lg:flex border-r">
                    <Sidebar />
                </div>

                <div className="w-full p-6 overflow-auto bg-[#f9fafb] dark:bg-background">
                    {children}
                </div>

            </div>
        </div>
    )
}
