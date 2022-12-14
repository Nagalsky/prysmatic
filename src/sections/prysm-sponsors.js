import {useState} from 'react'
import Image from 'next/image'
import {useKeenSlider} from 'keen-slider/react'
import {GalleryControls} from '../components/gallery-controls'
import {GalleryPagination} from '../components/gallery-pagination'

import 'keen-slider/keen-slider.min.css'

const slides = [
  '/images/sponsors-slide-1.png',
  '/images/sponsors-slide-2.png',
  '/images/sponsors-slide-3.png',
  '/images/sponsors-slide-4.png',
  '/images/sponsors-slide-5.png',
  '/images/sponsors-slide-6.png',
  '/images/sponsors-slide-7.png',
  '/images/sponsors-slide-8.png',
]

export default function PrysmSponsors({...restProps}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instancePrysmSponsorsRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 2,
        spacing: 36,
      },
      loop: true,
      breakpoints: {
        '(min-width: 540px)': {
          slides: {perView: 3, spacing: 36},
        },
        '(min-width: 768px)': {
          slides: {perView: 4, spacing: 36},
        },
        '(min-width: 1024px)': {
          slides: {perView: 5, spacing: 36},
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [
      (slider) => {
        let timeout
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          timeout = setTimeout(() => {
            slider.next()
          }, 3000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ],
  )

  return (
    <section
      className="py-5 md:py-16 text-center overflow-x-hidden overflow-y-auto"
      {...restProps}
    >
      <div className="container">
        <h3 className="uppercase font-subheading text-[20px] md:text-[26px] lg:text-[36px] text-purple-600 dark:text-sky-600 mb-[20px] md:mb-[40px] tracking-[1.08px] leading-[1.25]">
          SPONSORS & GRANTS
        </h3>

        <h2 className="text-[20px] md:text-[30px] lg:text-[40px] font-heading mx-auto max-w-[930px] leading-[1.3]">
          We&#39;re fully funded by grants and &lsquo;investors&rsquo; in the
          future of finance. Meet our sponsors.
        </h2>

        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-5 md:px-0">
          <div ref={sliderRef} className="keen-slider">
            {slides.map((item, index) => {
              return (
                <div className="keen-slider__slide" key={index}>
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
                </div>
              )
            })}
          </div>

          {loaded && instancePrysmSponsorsRef.current && (
            <>
              <div className="hidden md:flex items-center justify-center gap-10 absolute left-0 w-full bottom-[5%] z-20 [&>*]:cursor-pointer [&>*]:rounded-full [&>*]:w-8 [&>*]:h-8 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:text-semi-white [&>*]:dark:text-dark-500 [&>*]:bg-purple-500 [&>*]:dark:bg-yellow-500 [&>*]:transition">
                <GalleryControls
                  className="hover:bg-purple-600 dark:hover:bg-yellow-600"
                  iconSize="w-5 h-5"
                  left
                  onClick={(e) =>
                    e.stopPropagation() ||
                    instancePrysmSponsorsRef.current?.prev()
                  }
                />

                <GalleryControls
                  className="hover:bg-purple-600 dark:hover:bg-yellow-600"
                  iconSize="w-5 h-5"
                  right
                  onClick={(e) =>
                    e.stopPropagation() ||
                    instancePrysmSponsorsRef.current?.next()
                  }
                />
              </div>

              <div className="flex items-center justify-center flex-wrap gap-2 md:hidden">
                {[
                  ...Array(
                    instancePrysmSponsorsRef.current.track.details.slides
                      .length,
                  ).keys(),
                ].map((idx) => {
                  return (
                    <GalleryPagination
                      key={idx}
                      onClick={() => {
                        instancePrysmSponsorsRef.current?.moveToIdx(idx)
                      }}
                      currentSlide={currentSlide}
                      idx={idx}
                    />
                  )
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
