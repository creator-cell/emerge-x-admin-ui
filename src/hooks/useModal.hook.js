'use client'

import { ModalContext } from "@/providers/modal.provider";
import { useContext } from "react";

export const useModal = () => useContext(ModalContext);