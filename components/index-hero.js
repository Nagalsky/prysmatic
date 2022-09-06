import React from 'react'
import Image from 'next/image'
import banner from '../assets/images/index-hero-banners.svg'

export default function IndexHero({ ...restProps }) {
  console.log('banner', banner)
  return (
    <section
      className="pt-[20px] pb-[52px] lg:pt-[175px] lg:pb-[110px] relative"
      {...restProps}
    >
      {/* <div class="mb-[20px] md:m-0 md:absolute md:w-[48%] md:right-0 md:top-1/2 md:-translate-y-2/4 md:max-w-[500px]">
        <Image
          src={banner}
          alt="index-hero-banners"
          title="index-hero-banners"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
        />
      </div> */}

      <div className="container">
        <h1 className="font-heading text-[40px] sm:text-[50px] lg:text-[65px] xl:text-[70px]">
          Prysm
        </h1>
      </div>
    </section>
  )
}
