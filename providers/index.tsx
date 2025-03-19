"use client"
import { ClerkProvider } from "@clerk/nextjs"
import React from "react"
const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      signInUrl={`${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}`}
      signUpUrl={`${process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}`}
      afterSignOutUrl={"/"}
      signInFallbackRedirectUrl={"/stores"}
      signUpFallbackRedirectUrl={"/stores"}
    >
      {children}
    </ClerkProvider>
  )
}
export default Provider
