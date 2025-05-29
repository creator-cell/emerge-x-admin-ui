"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";

const login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col justify-center px-4 py-10 md:px-8 lg:px-12 rounded-lg">
                <div className="max-w-md mx-auto w-full space-y-8">
                    <div className="text-center space-y-2">
                        <div className="flex items-center justify-center gap-8">
                            <img src="/logo.svg" alt="Emerge-x-logo" className="w-44" />
                        </div>
                        <div className="space-y-2">
                            <h2
                                className="text-xl font-semibold textLoginColor"
                                style={{
                                    fontWeight: "600",
                                    fontSize: "30px",
                                    lineHeight: "38px",
                                }}
                            >
                                Log in to your account
                            </h2>
                            <p className="text-gray-400 font-normal leading-[24px]">
                                Welcome back! Please enter your details.
                            </p>
                        </div>
                    </div>

                    <form className="w-[360px] space-y-4 mx-auto">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block textSmallColor">
                                    Email*
                                </label>
                                <Input
                                    id="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    className="w-full px-3 py-5 rounded-[8px]"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="password" className="block textSmallColor">
                                    Password*
                                </label>
                                <div className="relative inputBgColor">
                                    <Input
                                        id="password"
                                        placeholder="Enter password"
                                        type={showPassword ? "text" : "password"}
                                        className="w-full px-3 py-5 rounded-[8px]"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                    >
                                        {showPassword ? (
                                            <EyeIcon className="h-4 w-4" />
                                        ) : (
                                            <EyeOffIcon className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full text-right">
                            <p className="text-xs font-medium text-gray-300">Forgot Password</p>
                        </div>

                        <Link href={"/"}>
                            <Button
                                className={'w-full'}
                                type="submit"
                                size={'lg'}
                            >
                                Sign in
                            </Button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default login