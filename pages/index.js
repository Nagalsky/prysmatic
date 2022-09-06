import { useEffect } from 'react'
import Head from 'next/head'
import PrysmHero from '../sections/prysm-hero'
import PrysmOpenSource from '../sections/prysm-open-source'

export default function Home() {
  const bodyClasses = ['bg-body-gradient', 'text-semi-white']
  useEffect(() => {
    document.body.classList.add(...bodyClasses)
  })

  return (
    <>
      <Head>
        <title>Prysmatic landing page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PrysmHero />

      <PrysmOpenSource />
    </>
  )
}
