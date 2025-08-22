// src/app/RootClientProvider.js
"use client";

import { SessionProvider } from "next-auth/react";

export default function RootClientProvider({ children }) {
    return <SessionProvider>{children}</SessionProvider>;
}
