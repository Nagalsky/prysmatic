import {useState, forwardRef} from 'react'
import {useKeenSlider} from 'keen-slider/react'
import Image from 'next/image'
import 'keen-slider/keen-slider.min.css'

const slides = [
  'Build a community of strong believers in Ethereum’s current projects and prospects for a decentralized future',
  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
]

const AboutOurVision = forwardRef((props, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
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
    <section className="py-6 md:py-16 text-center" {...props}>
      <div className="container">
        <h3
          className="uppercase font-subheading text-[20px] md:text-[26px] lg:text-[36px] text-purple-600 dark:text-sky-600 mb-[20px] md:mb-[40px] tracking-[1.08px] leading-[1.25]"
          ref={ref}
        >
          OUR VISION
        </h3>

        <h2 className="text-[20px] md:text-[30px] lg:text-[40px] font-heading mb-8 md:mb-16 mx-auto max-w-[800px] leading-[1.3]">
          Accelerate the world&#39;s transition to sustainable economics
        </h2>

        <div className="mx-auto max-w-[868px] rounded-large p-[20px] md:p-16 bg-cover bg-no-repeat bg-[url('/images/vision-gallery-bg.png')] dark:bg-none bg-white dark:bg-dark-500 grid grid-cols-[62px_1fr] gap-5 md:gap-[30px] text-left">
          <div className="flex">
            {loaded && instanceRef.current && (
              <div className="relative flex flex-col items-center justify-around grow before:content-[''] before:absolute before:top-0 before:h-full before:left-1/2 before:-translate-x-1/2 before:w-[1px] before:bg-dark-500 dark:before:bg-semi-white">
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
                      className={`${
                        currentSlide === idx
                          ? ''
                          : 'rounded-full border border-dark-500 dark:border-semi-white'
                      } relative w-[23px] h-[23px] flex items-center justify-center flex-shrink-0`}
                    >
                      {currentSlide === idx ? (
                        <div className="w-[62px] flex-shrink-0">
                          <Image
                            src="/images/gallery-pagination.svg"
                            alt="pagination"
                            width={100}
                            height={100}
                            quality={100}
                            layout="responsive"
                            className="w-full"
                            priority={true}
                          />
                        </div>
                      ) : (
                        <span className="rounded-full bg-dark-500 dark:bg-semi-white relative w-[13px] h-[13px]"></span>
                      )}
                    </button>
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
})

AboutOurVision.displayName = 'AboutOurVision'

export default AboutOurVision
