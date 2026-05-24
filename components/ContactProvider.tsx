"use client";

import { createContext, useContext, useState, useCallback } from "react";
import ContactModal from "./ContactModal";

interface ContactCtx {
  open: () => void;
}

const Ctx = createContext<ContactCtx>({ open: () => {} });

export function useContact() {
  return useContext(Ctx);
}

export default function ContactProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open     = useCallback(() => setIsOpen(true),  []);
  const close    = useCallback(() => setIsOpen(false), []);

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      <ContactModal open={isOpen} onClose={close} />
    </Ctx.Provider>
  );
}
