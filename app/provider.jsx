"use client"
import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"

function provider({
  children,
  ...props
}) {
  return<NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export default provider