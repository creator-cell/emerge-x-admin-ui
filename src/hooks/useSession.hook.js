"use client";

import { SessionContext } from "@/providers/session.provider";
import { useContext } from "react";

export const useSession = () => useContext(SessionContext);
