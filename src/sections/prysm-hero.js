import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, GitHub } from '../lib/icons'

export default function PrysmHero({ ...restProps }) {
  return (
    <section
      className="pt-[20px] pb-[52px] sm:pt-[40px] md:pt-[60px] lg:pt-[120px] xl:pt-[200px] md:pb-[60px] lg:pb-[110px] relative text-center md:text-start"
      {...restProps}
    >
      <div className="mb-[20px] md:m-0 md:absolute md:w-[48%] md:right-0 md:bottom-0 md:max-w-[710px]">
        <Image
          src="/images/index-hero-banners.png"
          alt="hero-banners"
          width={100}
          height={100}
          quality={100}
          layout="responsive"
          priority={true}
        />
      </div>

      <div className="container relative z-10">
        <div className="md:max-w-[660px]">
          <h1 className="font-heading text-[40px] sm:text-[50px] lg:text-[65px] xl:text-[70px] mb-[20px] md:mb-[40px] leading-none">
            Prysm
          </h1>
          <h2 className="font-heading text-[30px] sm:text-[26px] lg:text-[40px] xl:text-[48px] leading-[1.6] md:leading-[1.4] mb-[20px] md:mb-[40px]">
            Run NODE
            <span className="inline-block bg-semi-white align-super w-[50px] lg:w-[90px] h-[7px] ml-2 relative top-[2px] md:top-0"></span>
            <span className="block">
              and use{' '}
              <span className="text-sky-500 uppercase">
                ETH <span className="block sm:inline">SUSTAINABLY</span>
              </span>
            </span>
          </h2>
          <p className="md:text-[20px] lg:text-[25px] mb-[40px] leading-[1.4] tracking-[0.5px]">
            Use Prysm to easily and sustainably run nodes on the Ethereum
            blockchain
          </p>

          <div className="flex flex-col sm:flex-wrap sm:flex-row items-center gap-6 sm:justify-start">
            <button
              type="button"
              className="inline-flex items-center gap-4 border-2 rounded-[10px] text-dark-500 transition py-[4px] px-[20px] border-yellow-500 bg-yellow-500 font-heading hover:bg-yellow-600 hover:border-yellow-600"
            >
              <GitHub className="w-8 h-8" />
              Install Prysm
            </button>

            <Link href="/">
              <a className="inline-flex items-center gap-4 text-yellow-500 transition hover:text-yellow-600">
                Read Our Docs
                <ArrowRight className="w-6 h-6" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
