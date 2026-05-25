"use client";

import { createContext, useContext, useState, useCallback } from "react";
import NotifyModal from "./NotifyModal";

interface NotifyCtx {
  open: (service?: string) => void;
}

const Ctx = createContext<NotifyCtx>({ open: () => {} });

export function useNotify() {
  return useContext(Ctx);
}

export default function NotifyProvider({ children }: { children: React.ReactNode }) {
  const [isOpen,  setIsOpen]  = useState(false);
  const [service, setService] = useState("RewardTalk");

  const open  = useCallback((svc?: string) => {
    setService(svc ?? "RewardTalk");
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      <NotifyModal open={isOpen} onClose={close} service={service} />
    </Ctx.Provider>
  );
}
