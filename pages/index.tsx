import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import MyHome from './components/Home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <MyHome />
  )
}
