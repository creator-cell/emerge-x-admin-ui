'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useTheme } from "@/hooks/useTheme.hook"
import { MonitorCog, Moon, Sun } from "lucide-react";

const settings = () => {

    const { setAppTheme, theme, mounted } = useTheme();

    if (!mounted) return null

    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-2xl font-bold">Manage Settings</h1>
            </div>

            <div className="max-w-md">

                <div className="flex w-full items-center justify-between">
                    <p>Theme</p>

                    <Select value={theme} onValueChange={(value) => setAppTheme(value)} >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">
                                <Sun />
                                Light
                            </SelectItem>
                            <SelectItem value="dark">
                                <Moon />
                                Dark
                            </SelectItem>
                            <SelectItem value="system">
                                <MonitorCog />
                                System
                            </SelectItem>
                        </SelectContent>
                    </Select>



                </div>

            </div>




        </div>
    )
}

export default settings