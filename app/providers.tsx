'use client'

import { NextUIProvider } from '@nextui-org/react'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
// import {ThemeProvider as NextThemesProvider} from "next-themes";
import React from 'react'

function Providers({children}: {children: React.ReactNode}) {
  const router = useRouter()

  return (
    <NextUIProvider navigate={router.push}>
        {/* <NextThemesProvider attribute="class" defaultTheme="dark"> */}
          {children}
        {/* </NextThemesProvider> */}
    </NextUIProvider>
  )
}

export default Providers