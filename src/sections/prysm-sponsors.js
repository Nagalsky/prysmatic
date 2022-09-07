import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ArrowLeft, ArrowRight } from '../lib/icons'

import 'swiper/css'
import 'swiper/css/pagination'

const slides = [
  '/images/sponsors-slide-1.png',
  '/images/sponsors-slide-2.png',
  '/images/sponsors-slide-3.png',
  '/images/sponsors-slide-4.png',
  '/images/sponsors-slide-5.png',
  '/images/sponsors-slide-1.png',
  '/images/sponsors-slide-2.png',
  '/images/sponsors-slide-3.png',
  '/images/sponsors-slide-4.png',
  '/images/sponsors-slide-5.png',
]

export default function PrysmSponsors({ ...restProps }) {
  const [mounted, setMounted] = useState(false)
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const pagination = {
    clickable: true,
    el: '.pagination',
    dynamicBullets: true,
    renderBullet: (index, className) => {
      return '<span class="text-[0] ' + className + '">' + index + '</span>'
    },
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-[20px] md:py-[40px] text-center" {...restProps}>
      <div className="container">
        <h3 className="uppercase font-subheading text-[20px] md:text-[26px] lg:text-[36px] text-sky-600 mb-[20px] md:mb-[40px] tracking-[1.08px]">
          SPONSORS & GRANTS
        </h3>

        <h2 className="text-[20px] md:text-[30px] lg:text-[40px] font-heading mb-10 md:mb-16 mx-auto max-w-[930px] leading-[1.3]">
          We&#39;re fully funded by grants and {'‘'}investors{'’'} in the future
          of finance. Meet our sponsors.
        </h2>

        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-5 md:px-0">
          <Swiper
            className="!pb-6 !md:pb-0"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={36}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current
              swiper.params.navigation.nextEl = navigationNextRef.current
            }}
            loop={true}
            pagination={pagination}
            slidesPerView={2}
            breakpoints={{
              540: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {slides.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Image
                    src={item}
                    alt="slide"
                    width={100}
                    height={100}
                    quality={100}
                    layout="responsive"
                    className="w-full"
                    objectFit="contain"
                    priority={true}
                  />
                </SwiperSlide>
              )
            })}

            <div className="hidden md:flex items-center justify-center gap-10 absolute left-0 w-full bottom-[5%] z-20 [&>*]:cursor-pointer [&>*]:rounded-full [&>*]:w-8 [&>*]:h-8 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:text-dark-500 [&>*]:bg-yellow-500 [&>*]:transition">
              <div ref={navigationPrevRef} className="hover:bg-yellow-600">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <div ref={navigationNextRef} className="hover:bg-yellow-600">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            <div className="pagination md:hidden absolute !-bottom-[5px] z-20"></div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
