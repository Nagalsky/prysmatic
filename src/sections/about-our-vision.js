import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const slides = [
  'Build a community of strong believers in Ethereum’s current projects and prospects for a decentralized future',
  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
]

export default function AboutOurVision({ ...restProps }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <section className="py-6 md:py-16 text-center" {...restProps}>
      <div className="container">
        <h3 className="uppercase font-subheading text-[20px] md:text-[26px] lg:text-[36px] text-purple-600 dark:text-sky-600 mb-[20px] md:mb-[40px] tracking-[1.08px]">
          OUR VISION
        </h3>

        <h2 className="text-[20px] md:text-[30px] lg:text-[40px] font-heading mb-8 md:mb-16 mx-auto max-w-[800px] leading-[1.3]">
          Accelerate the world{'’'}s transition to sustainable economics
        </h2>

        <div className="mx-auto max-w-[868px] rounded-large p-[20px] md:p-16 bg-cover bg-no-repeat bg-[url('/images/vision-gallery-bg.png')] bg-white dark:bg-dark-500 grid grid-cols-[62px_1fr] gap-5 md:gap-[30px] text-left">
          <div className="flex">
            {loaded && instanceRef.current && (
              <div className="relative grow before:content-[''] before:absolute before:top-0 before:h-full before:left-1/2 before:-translate-x-1/2 before:w-[1px] before:bg-dark-500 dark:before:bg-semi-white">
                {[
                  ...Array(
                    instanceRef.current.track.details.slides.length,
                  ).keys(),
                ].map((idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(idx)
                      }}
                      className={
                        'dot' + (currentSlide === idx ? ' active' : '')
                      }
                    ></button>
                  )
                })}
              </div>
            )}
          </div>

          <div className="rounded-xl bg-dark-500 text-semi-white dark:bg-semi-white dark:text-dark-500 px-5 py-20 font-lead min-w-0 text-lead text-[18px] md:text-[26px] lg:text-[30px] leading-[1.3]">
            <div ref={sliderRef} className="keen-slider items-center">
              {slides.map((item, index) => {
                return (
                  <div className="keen-slider__slide" key={index}>
                    {item}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
