import { Inter, Caudex } from 'next/font/google'



export const inter = Inter({ 
    subsets: ['latin'], 
    weight: ['300','400', '700'], 
    display: 'swap'
  })

export const caudex = Caudex({ 
    subsets: ['latin'], 
    weight: ['400', '700'],
    display: 'swap'
  })