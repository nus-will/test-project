'use client';

import { AppProvider } from "@/context/AppContext";
import { PropsWithChildren } from "react";

export function Providers( props: PropsWithChildren) {
  return (
    <AppProvider>
      {props.children}
    </AppProvider>
  );
}