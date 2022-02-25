import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
// import Image from 'next/image'

const Home: NextPage = () => {
  let tag = "Invasion#2063"
  let email = "hi@invader.codes"

  const [disc, setDisc] = useState(tag);
  const [ema, setEma] = useState(email);

  const delay = (ms: any) => new Promise(res => setTimeout(res, ms));

  async function saveDiscord() {
    navigator.clipboard.writeText(tag);
    setDisc("Copied!")
    await delay(5000);
    setDisc(tag);
  }

  async function saveEmail() {
    navigator.clipboard.writeText(email);
    setEma("Copied!");
    await delay(5000);
    setEma(email);
  }

  return (
    <div className="core flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Invader - Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col justify-center px-12 almostscreen">
        <div className='flex flex-col gap-6 text-white widthconstrict'>
          <h1 className='font-black text-7xl lg:text-9xl'>invader</h1>
          <h1 className='font-bold text-4xl lg:text-6xl opacity-75'>Full Stack Dev</h1>
          <div className='mt-8 greenprimary py-8 px-6 md:px-12 rounded-lg max-w-2xl'>
            <p className='text-black  max-w-lg text-md md:text-lg font-semibold leading-relaxed opacity-85'>Specializing in building and designing fluid user experiences and powerful backend architecture, focused on the web3 space. </p>
            <div className='flex-col sm:flex-row flex gap-6 mt-8'>
              <button onClick={saveDiscord} className='bg-black px-8 py-3 rounded-lg font-bold flex flex-row items-center justify-center gap-3'><img className='w-6' src='/discord.svg'/>{disc}</button>
              <button onClick={saveEmail} className='bg-black px-8 py-3 rounded-lg font-bold flex flex-row items-center justify-center gap-3'><img className='w-6' src='/email.svg'/>{ema}</button>
            </div>
          </div>
         
        </div>
      </main>
      <div className='min-h-screen greenprimary h-full w-full flex flex-col '>
        <div className='px-8 h-full divide-y divide-black w-full flex flex-col gap-6 widthconstrict text-black'>
          <h1 className='font-semibold text-4xl lg:text-6xl mt-16'>Clients</h1>
          <div className='py-8 flex flex-col gap-8'>

              <div className='shadow-lg  rounded-lg w-full flex items-center justify-center h-48 flex flex-row agc'>
                <div className='px-6 flex flex-col gap-3 rounded-l-lg bg-black h-full text-center flex items-center justify-center w-2/4'>
                  <h1 className='font-bold text-white text-xl sm:text-2xl opacity-75'>Alpha Girl Club</h1>
                  <h1 className='font-medium text-white text-sm sm:text-lg opacity-75 greentext'>Lead Developer</h1>
                </div>
                <div className='rounded-r-lg overflow-hidden bg-red-200 h-full w-full overflow-hidden'>
                  <img className='object-cover object-center w-full h-full' src='/agc.jpg' />
                </div>
              </div>

              <div className='shadow-lg  rounded-lg w-full flex items-center justify-center h-48 flex flex-row agc'>
                <div className=' px-6 flex flex-col gap-3 rounded-l-lg bg-black h-full text-center flex items-center justify-center w-2/4'>
                  <h1 className='font-bold text-white text-xl sm:text-2xl opacity-75'>Project Destroyer</h1>
                  <h1 className='font-medium text-white text-sm sm:text-lg opacity-75 greentext'>Developer</h1>
                </div>
                <div className='rounded-r-lg overflow-hidden bg-red-200 h-full w-full overflow-hidden'>
                  <img className='object-cover object-center w-full h-full' src='/pd.png' />
                </div>
            </div>

             <div className='shadow-lg  rounded-lg w-full flex items-center justify-center h-48 flex flex-row agc'>
                <div className=' px-6 flex flex-col gap-3 rounded-l-lg bg-black h-full text-center flex items-center justify-center w-2/4'>
                  <h1 className='font-bold text-white text-xl sm:text-2xl opacity-75'>Nightkids</h1>
                  <h1 className='font-medium text-white text-sm sm:text-lg opacity-75 greentext'>Developer</h1>
                </div>
                <div className='rounded-r-lg overflow-hidden bg-red-200 h-full w-full overflow-hidden'>
                  <img className='object-cover  object-center w-full h-full' src='/nk.jpg' />
                </div>
            </div>

            <div className='mb-8 shadow-lg  rounded-lg w-full flex items-center justify-center h-48 flex flex-row agc'>
                <div className=' px-6 flex flex-col gap-3 rounded-l-lg bg-black h-full text-center flex items-center justify-center w-2/4'>
                  <h1 className='font-bold text-white text-xl sm:text-2xl opacity-75'>Cat Bricks Clubhouse</h1>
                  <h1 className='font-medium text-white text-sm sm:text-lg opacity-75 greentext'>Lead Developer</h1>
                </div>
                <div className='rounded-r-lg overflow-hidden bg-red-200 h-full w-full overflow-hidden'>
                  <img className='object-cover  object-center w-full h-full' src='/cbc.png' />
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
