import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
// import Image from 'next/image'

const Home: NextPage = () => {
  let tag = 'Invader#2063'
  let email = 'hi@invader.codes'

  const [disc, setDisc] = useState(tag)
  const [ema, setEma] = useState(email)

  const delay = (ms: any) => new Promise((res) => setTimeout(res, ms))

  async function saveDiscord() {
    navigator.clipboard.writeText(tag)
    setDisc('Copied!')
    await delay(5000)
    setDisc(tag)
  }

  async function saveEmail() {
    navigator.clipboard.writeText(email)
    setEma('Copied!')
    await delay(5000)
    setEma(email)
  }

  return (
    <div className="core flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Invader - Development</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="👾 Invader Development" />
        <meta property="og:url" content="https://www.invader.codes/" />
        <meta property="og:image" content="/preview.png" />
        <meta
          name="og:description"
          content="INVADER DEVELOPMENT - Full stack expertise in Web3 software and application programming and design. We build smoothly designed and powerfully secure servers and web applications, focusing on all things Web3 and NFT/Crypto."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="👾 Invader Development" />
        <meta
          name="twitter:description"
          content="INVADER DEVELOPMENT - Full stack expertise in Web3 software and application programming and design. We build smoothly designed and powerfully secure servers and web applications, focusing on all things Web3 and NFT/Crypto."
        />
        <meta name="twitter:image" content="/preview.png" />
      </Head>

      <main className="almostscreen flex w-full flex-1 flex-col justify-center px-12">
        <div className="widthconstrict flex flex-col gap-6 text-white">
          <h1 className="text-7xl font-black lg:text-9xl">invader</h1>
          <h1 className="text-4xl font-bold opacity-75 lg:text-6xl">
            Full Stack Dev
          </h1>
          <div className="greenprimary mt-8 max-w-2xl rounded-lg py-8 px-6 md:px-12">
            <p className="text-md  opacity-85 max-w-lg font-semibold leading-relaxed text-black md:text-lg">
              Specializing in building and designing fluid user experiences and
              powerful backend architecture, focused on the web3 space.{' '}
            </p>
            <div className="mt-8 flex flex-col gap-6 sm:flex-row">
              <button
                onClick={saveDiscord}
                className="flex flex-row items-center justify-center gap-3 rounded-lg bg-black px-8 py-3 font-bold"
              >
                <img className="w-6" src="/discord.svg" />
                {disc}
              </button>
              <button
                onClick={saveEmail}
                className="flex flex-row items-center justify-center gap-3 rounded-lg bg-black px-8 py-3 font-bold"
              >
                <img className="w-6" src="/email.svg" />
                {ema}
              </button>
            </div>
          </div>
        </div>
      </main>
      <div className="greenprimary flex h-full min-h-screen w-full flex-col ">
        <div className="widthconstrict flex h-full w-full flex-col gap-6 divide-y divide-black px-8 text-black">
          <h1 className="mt-16 text-4xl font-semibold lg:text-6xl">Clients</h1>
          <div className="flex flex-col gap-8 py-8">
            <div className="agc  flex flex h-48 w-full flex-row items-center justify-center rounded-lg shadow-lg">
              <div className="flex flex h-full w-2/4 flex-col items-center justify-center gap-3 rounded-l-lg bg-black px-6 text-center">
                <h1 className="text-xl font-bold text-white opacity-75 sm:text-2xl">
                  Umami Finance
                </h1>
                <h1 className="greentext text-sm font-medium text-white opacity-75 sm:text-lg">
                  Solidity Developer
                </h1>
              </div>
              <div className="h-full w-full overflow-hidden overflow-hidden rounded-r-lg bg-red-200">
                <img
                  className="h-full w-full object-cover object-center"
                  src="/umami.png"
                />
              </div>
            </div>

            <div className="agc  flex flex h-48 w-full flex-row items-center justify-center rounded-lg shadow-lg">
              <div className="flex flex h-full w-2/4 flex-col items-center justify-center gap-3 rounded-l-lg bg-black px-6 text-center">
                <h1 className="text-xl font-bold text-white opacity-75 sm:text-2xl">
                  Alpha Girl Club
                </h1>
                <h1 className="greentext text-sm font-medium text-white opacity-75 sm:text-lg">
                  Lead Developer
                </h1>
              </div>
              <div className="h-full w-full overflow-hidden overflow-hidden rounded-r-lg bg-red-200">
                <img
                  className="h-full w-full object-cover object-center"
                  src="/agc.jpg"
                />
              </div>
            </div>

            <div className="agc  flex flex h-48 w-full flex-row items-center justify-center rounded-lg shadow-lg">
              <div className=" flex flex h-full w-2/4 flex-col items-center justify-center gap-3 rounded-l-lg bg-black px-6 text-center">
                <h1 className="text-xl font-bold text-white opacity-75 sm:text-2xl">
                  Project Destroyer
                </h1>
                <h1 className="greentext text-sm font-medium text-white opacity-75 sm:text-lg">
                  Developer
                </h1>
              </div>
              <div className="h-full w-full overflow-hidden overflow-hidden rounded-r-lg bg-red-200">
                <img
                  className="h-full w-full object-cover object-center"
                  src="/pd.png"
                />
              </div>
            </div>

            <div className="agc  flex flex h-48 w-full flex-row items-center justify-center rounded-lg shadow-lg">
              <div className=" flex flex h-full w-2/4 flex-col items-center justify-center gap-3 rounded-l-lg bg-black px-6 text-center">
                <h1 className="text-xl font-bold text-white opacity-75 sm:text-2xl">
                  Nightkids
                </h1>
                <h1 className="greentext text-sm font-medium text-white opacity-75 sm:text-lg">
                  Developer
                </h1>
              </div>
              <div className="h-full w-full overflow-hidden overflow-hidden rounded-r-lg bg-red-200">
                <img
                  className="h-full  w-full object-cover object-center"
                  src="/nk.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
