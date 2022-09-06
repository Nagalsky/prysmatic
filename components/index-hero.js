import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import banner from '../assets/images/index-hero-banners.png'

export default function IndexHero({ ...restProps }) {
  return (
    <section
      className="pt-[20px] pb-[52px] sm:pt-[40px] md:pt-[60px] lg:pt-[120px] xl:pt-[200px] md:pb-[60px] lg:pb-[110px] relative text-center md:text-start"
      {...restProps}
    >
      <div className="mb-[20px] md:m-0 md:absolute md:w-[48%] md:right-0 md:bottom-0 md:max-w-[710px]">
        <Image
          src={banner}
          alt="index-hero-banners"
          title="index-hero-banners"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
          priority={10}
        />
      </div>

      <div className="container relative z-10">
        <div className="md:max-w-[660px]">
          <h1 className="font-heading text-[40px] sm:text-[50px] lg:text-[65px] xl:text-[70px] mb-[20px] md:mb-[40px] leading-none">
            Prysm
          </h1>
          <h2 className="font-heading text-[30px] sm:text-[26px] lg:text-[40px] xl:text-[48px] leading-[1.6] md:leading-[1.4]  mb-[20px] md:mb-[40px]">
            Run NODE
            <span className="inline-block bg-semi-white align-super w-[50px] lg:w-[90px] h-[7px] ml-2 relative top-[2px] md:top-0"></span>
            <span className="block">
              and use{' '}
              <span className="text-sky-500 uppercase">
                ETH <span className="block sm:inline">SUSTAINABLY</span>
              </span>
            </span>
          </h2>
          <p className="md:text-[20px] lg:text-[25px] mb-[40px] leading-[1.4]">
            Use Prysm to easily and sustainably run nodes on the Ethereum
            blockchain
          </p>

          <div className="flex flex-col sm:flex-wrap sm:flex-row items-center gap-6 sm:justify-start">
            <button
              type="button"
              className="inline-flex items-center gap-4 border-2 rounded-[10px] text-dark-500 transition py-[4px] px-[20px] border-yellow-500 bg-yellow-500 font-heading hover:bg-yellow-600 hover:border-yellow-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M19.2941 23.8995V20.6969C19.2941 19.7819 19.3882 19.4158 18.8235 18.8668C21.4588 18.5923 24 17.5858 24 13.3766C23.9989 12.2831 23.56 11.233 22.7765 10.4485C23.144 9.49869 23.1101 8.44609 22.6824 7.52042C22.6824 7.52042 21.6471 7.24591 19.3882 8.70996C17.475 8.22553 15.4661 8.22553 13.5529 8.70996C11.2941 7.24591 10.2588 7.52042 10.2588 7.52042C9.83104 8.44609 9.79721 9.49869 10.1647 10.4485C9.38113 11.233 8.94232 12.2831 8.94118 13.3766C8.94118 17.5858 11.4824 18.5923 14.1176 18.8668C13.5529 19.4158 13.5529 19.9649 13.6471 20.6969V23.8995M13.6471 22.0694C9.6 23.3505 9.6 19.7819 8 19.3243L13.6471 22.0694Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Install Prysm
            </button>

            <Link href="/">
              <a className="inline-flex items-center gap-4 text-yellow-500 transition hover:text-yellow-600">
                Read Our Docs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
