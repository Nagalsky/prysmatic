import React from 'react'
import Image from 'next/image'
import banner from '../assets/images/open-source-banner.png'

export default function PrysmOpenSource({ ...restProps }) {
  return (
    <section
      className="pt-[20px] pb-14 md:pt-16 xl:pt-[105px] md:pb-[60px] text-center"
      {...restProps}
    >
      <div className="container">
        <h2 className="font-heading text-[30px] sm:text-[36px] md:text-[40px] lg:text-[48px] leading-[1.35] mb-[40px]">
          Free .{' '}
          <span className="bg-rose-500 inline-block px-1">Open-Source</span> .
          Globally
          <span className="xl:block">Accessible</span>
        </h2>
        <h3 className="font-lead text-[20px] sm:text-[26px] md:text-[30px] lg:text-[40px] mx-auto max-w-[920px] leading-[1.25] mb-[40px] md:mb-16">
          Prysm empowers developers to build a fairer financial world
        </h3>

        <div className="mb-[20px] max-w-[754px] mx-auto">
          <Image
            src={banner}
            alt="banner"
            title="banner"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            priority={10}
          />
        </div>
      </div>
    </section>
  )
}
