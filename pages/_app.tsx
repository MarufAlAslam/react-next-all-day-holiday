import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import '../assets/styles/style.css'

import Main from "../components/layout/Main"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  )
}
