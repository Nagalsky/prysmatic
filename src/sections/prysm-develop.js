import React from 'react'
import Image from 'next/image'
import bannerImg from '../assets/images/open-source-banner.png'
import bannerMobileImg from '../assets/images/open-source-banner-mobile.png'
import futuristicEthereumImg from '../assets/images/futuristic-ethereum.png'
import prysmsImg from '../assets/images/prysms.png'

export default function Prysmdevelop({ ...restProps }) {
  return (
    <section className="pt-[20px] py-[40px] text-center" {...restProps}>
      <div className="container">
        <h2 className="font-heading text-[30px] sm:text-[36px] md:text-[40px] lg:text-[48px] leading-[1.35] mb-[40px]">
          Free .
          <span className="bg-rose-500 inline-block px-1">Open-Source</span> .
          Globally
          <span className="xl:block">Accessible</span>
        </h2>
      </div>
    </section>
  )
}
